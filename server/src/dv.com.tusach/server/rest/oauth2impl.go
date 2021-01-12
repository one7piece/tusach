package rest

import (
	"bytes"
	"context"
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
	"time"

	"dv.com.tusach/logger"
	"dv.com.tusach/model"
	"dv.com.tusach/util"
	"github.com/dgrijalva/jwt-go"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/facebook"
	"golang.org/x/oauth2/google"
)

var JWT_SECRET = []byte("jwt.one7piece")

type OAuth2Impl struct {
	marshaler    JsonMarshaler
	oauthConfigs map[string]*oauth2.Config
}

func (o *OAuth2Impl) Auth(w http.ResponseWriter, r *http.Request) (*context.Context, bool) {
	//logger.Debugf("Authenticate URL: %s\n", r.URL.String())

	if strings.LastIndex(r.URL.Path, "/login/") != -1 || strings.LastIndex(r.URL.Path, "/oauth/") != -1 {
		return nil, true
		// if userResource != nil {
		// 	o.oauthProcessRedirect(userResource, w, r)
		// } else if index := strings.LastIndex(r.URL.Path, "/login/"); index != -1 {
		// 	provider := r.URL.Path[index+len("/login/"):]
		// 	logger.Infof("Login - provider:%s", provider)
		// 	userRes := util.GetOAuthUserResource(provider)
		// 	if userRes == nil {
		// 		o.marshaler.SetResponseError(w, http.StatusBadRequest, "Invalid provider: '"+provider+"'")
		// 	}
		// 	o.oauthLogin(userRes, w, r)
		// 	return nil, false
	} else if r.Method != "GET" && util.GetConfiguration().CheckPermission != "false" {
		errorMsg := ""
		jwt := o.extractJwtToken(w, r)
		if jwt != "" {
			// verify the token
			token, err := o.verify(jwt)
			if err != nil {
				errorMsg = err.Error()
			} else {
				if !o.authorize(w, r, token) {
					errorMsg = "Permission denied"
				} else {
					// set the context
					ctx := context.WithValue(r.Context(), "user", token.EmailAddress)
					ctx = context.WithValue(ctx, "role", token.Role)
					return &ctx, true
				}
			}
		} else {
			errorMsg = "Missing JWT token"
		}
		if errorMsg != "" {
			logger.Error(errorMsg)
			json := "{\"error\": \"" + errorMsg + "\"}"
			fmt.Fprintf(w, "%s", json)
			w.WriteHeader(http.StatusUnauthorized)
			return nil, false
		}
	}
	return nil, true
}

func (o *OAuth2Impl) extractJwtToken(w http.ResponseWriter, r *http.Request) string {
	jwt := ""
	if c, err := r.Cookie("tusach.jwt"); err == nil {
		// extract from cookie
		jwt = c.Value
		logger.Infof("extracted JWT from cookie: %s\n", jwt)
	} else {
		// extract from header
		authstr := r.Header.Get("Authorization")
		if strings.HasPrefix(authstr, "Bearer") {
			jwt = strings.TrimSpace(authstr[len("Bearer"):])
			logger.Infof("extracted JWT from header: %s\n", jwt)
		}
	}
	return jwt
}

func (o *OAuth2Impl) verify(jwtstr string) (*JWTTokenClaims, error) {
	token, err := jwt.ParseWithClaims(jwtstr, &JWTTokenClaims{},
		func(token *jwt.Token) (interface{}, error) {
			return JWT_SECRET, nil
		},
	)
	if err != nil {
		return nil, err
	}

	claims, ok := token.Claims.(*JWTTokenClaims)
	if !ok {
		return nil, errors.New("Couldn't parse claims")
	}
	if claims.ExpiresAt < time.Now().UTC().Unix() {
		return nil, errors.New("JWT token is expired")
	}
	logger.Infof("JWT token verified for user: %s/%s", claims.UserId, claims.Role)

	return claims, nil
}

func (o *OAuth2Impl) authorize(w http.ResponseWriter, r *http.Request, token *JWTTokenClaims) bool {
	// check for command/delete, command/update, command/resume, command/abort
	if index := strings.LastIndex(r.URL.Path, "/command/"); index != -1 {
		command := r.URL.Path[index+len("/command/"):]
		// strip the ending /
		if len(command) > 1 && strings.HasSuffix(command, "/") {
			command = command[0 : len(command)-1]
		}
		logger.Infof("check permission for command: %s, user: %s\n", command, token.UserId)
		// only admin can delete
		if command == "delete" && token.Role != "admin" {
			logger.Info("Only admin can delete book")
			return false
		}
		if command == "update" || command == "resume" || command == "abort" {
			// check that the user is the owner or has admin role
			book := model.Book{}
			dataBytes, err := o.marshaler.GetRequestPayload(r, &book)
			if err != nil {
				// invalid payload
				logger.Errorf("Invalid request book payload [%s] %v\n", r.Body, err)
				o.marshaler.SetResponseError(w, http.StatusBadRequest, "Invalid request book payload: "+err.Error())
				return false
			}
			canUpdate := token.Role == "admin" || book.CreatedBy == token.UserId
			if !canUpdate {
				logger.Info("Book %d(%s) created by %s can only be deleted by admin or the owner\n", book.Id, book.Title, book.CreatedBy)
				return false
			}
			r.Body = ioutil.NopCloser(bytes.NewBuffer(dataBytes))
		}
	}
	return true
}

func (o *OAuth2Impl) Login(userRes *util.OAuthUserResource, w http.ResponseWriter, r *http.Request) {
	logger.Infof("Login - provider:%s", userRes.Name)

	endpoint := google.Endpoint
	if userRes.Name == "facebook" {
		endpoint = facebook.Endpoint
	}
	var googleOauthConfig = &oauth2.Config{
		RedirectURL:  userRes.Redirect,
		ClientID:     userRes.ClientID,
		ClientSecret: userRes.ClientSecret,
		Scopes:       []string{userRes.Scope},
		Endpoint:     endpoint,
	}

	// AuthCodeURL receive state that is a token to protect the user from CSRF attacks.
	// You must always provide a non-empty string and validate that it matches with the
	// state query parameter on your redirect callback, It’s advisable that this is
	// randomly generated for each request
	b := make([]byte, 16)
	rand.Read(b)
	oauthState := base64.URLEncoding.EncodeToString(b)

	// store the cached oauthConfig
	if o.oauthConfigs == nil {
		o.oauthConfigs = make(map[string]*oauth2.Config)
	}
	o.oauthConfigs[oauthState] = googleOauthConfig
	logger.Infof("Caching provider oauthState: %s\n", oauthState)
	// TODO clear unused values

	u := googleOauthConfig.AuthCodeURL(oauthState)
	//r.Header.Set("Content-Type", "text/plain")
	//w.Header().Set("Access-Control-Allow-Origin", "*")
	//w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	//w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	logger.Infof("Redirect to provider auth url: %s\n", u)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "%s", "{\"redirectUrl\": \""+u+"\"}")

	//http.Redirect(w, r, u, http.StatusTemporaryRedirect)
}

func (o *OAuth2Impl) ProcessRedirect(userRes *util.OAuthUserResource, w http.ResponseWriter, r *http.Request) {
	logger.Infof("ProcessRedirect - %s", r.URL.Path)
	// get the authorization code
	err := r.ParseForm()
	if err != nil {
		logger.Errorf("could not parse query: %v\n", err)
		//w.WriteHeader(http.StatusBadRequest)
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	// check for matching oauthState
	var googleOauthConfig *oauth2.Config
	if o.oauthConfigs != nil {
		googleOauthConfig = o.oauthConfigs[r.FormValue("state")]
	}
	if googleOauthConfig == nil {
		logger.Error("Invalid oauth google state: %s\n", r.FormValue("state"))
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	code := r.FormValue("code")
	logger.Infof("Received authorization code for %s: %s\n", userRes.Name, code)
	token, err := googleOauthConfig.Exchange(context.Background(), code)
	if err != nil {
		logger.Error("could not get access token: %s\n", err.Error)
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	expirationTime := util.Time2String(token.Expiry)
	logger.Infof("Received access code:%s, type:%s, expired:%s\n", token.AccessToken, token.TokenType, expirationTime)

	// get the user information
	client := googleOauthConfig.Client(context.Background(), token)

	response, err := client.Get("https://www.googleapis.com/oauth2/v2/userinfo")
	if err != nil {
		logger.Errorf("failed getting user info: %s", err.Error())
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}
	defer response.Body.Close()
	contents, err := ioutil.ReadAll(response.Body)
	if err != nil {
		logger.Errorf("failed reading user info response body: %s", err.Error())
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}
	logger.Infof("logon user data: %s", string(contents))

	//var tokenData map[string]interface{}
	userData := make(map[string]interface{})
	if err = json.Unmarshal(contents, &userData); err != nil {
		logger.Errorf("failed to unmarshal user data: %s", err.Error())
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}
	//userData := tokenData["user"].(map[string]interface{})
	logger.Infof("token user email: %v", userData["email"])

	jwtExpiry := time.Now().Add(24 * 60 * time.Minute)
	roleId := "guest"
	if userData["email"] == "one7piece@gmail.com" {
		roleId = "admin"
	}

	// store the access token & refresh token, and pass the JWT token back to the client
	jwt, err := o.createJWTToken(jwtExpiry, userData["email"].(string), roleId, userData["email"].(string))
	if err != nil {
		logger.Errorf("failed to create jwt token: %s", err.Error())
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return
	}

	logger.Infof("JWT token created: %s\n", jwt)

	// store jwt in cookie
	http.SetCookie(w, &http.Cookie{
		Name:    "tusach.jwt",
		Value:   jwt,
		Expires: jwtExpiry,
		Path:    "/",
	})
	// Finally, send a response to redirect the user to the "welcome" page with the access token
	//w.Header().Set("Content-Type", "application/json")
	//loginReply := model.LoginReply{Jwt: jwt}
	//o.marshaler.SetResponseValue(w, &loginReply)

	w.Header().Set("Location", "/")
	w.WriteHeader(http.StatusFound)
}

/*
func (o *OAuth2Impl) getGoogleEmailAddress(client *http.Client) (string, error) {
	response, err := client.Get("https://www.googleapis.com/drive/v3/about?fields=user")
	if err != nil {
		logger.Errorf("failed getting user info: %s", err.Error())
		return "", err
	}
	defer response.Body.Close()
	contents, err := ioutil.ReadAll(response.Body)
	if err != nil {
		logger.Errorf("failed reading user info response body: %s", err.Error())
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return "", err
	}
	logger.Infof("logon user data: %s", string(contents))

	var tokenData map[string]interface{}
	if err = json.Unmarshal(contents, &tokenData); err != nil {
		logger.Errorf("failed to unmarshal user data: %s", err.Error())
		http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
		return "", err
	}
	userData := tokenData["user"].(map[string]interface{})
	logger.Infof("token user name: %v", userData["displayName"])
	return
}
*/
func (o *OAuth2Impl) createJWTToken(expirationTime time.Time, userId string, role string, emailAddress string) (string, error) {
	// Create the JWT claims, which includes the username and expiry time
	claims := &JWTTokenClaims{
		UserId:       userId,
		Role:         role,
		EmailAddress: emailAddress,
		StandardClaims: jwt.StandardClaims{
			// In JWT, the expiry time is expressed as unix milliseconds
			ExpiresAt: expirationTime.Unix(),
		},
	}

	// Declare the token with the algorithm used for signing, and the claims
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	// Create the JWT string
	return token.SignedString(JWT_SECRET)
}
