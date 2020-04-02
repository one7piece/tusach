package rest

import (
	"errors"
	"net/http"
	"strings"
	"time"

	"dv.com.tusach/logger"
	"dv.com.tusach/util"
	"github.com/dgrijalva/jwt-go"
)

var JWT_SECRET = "jwt.one7piece"

type OAuth2Impl struct {
	resource *util.OAuthResource
}

func (o *OAuth2Impl) Auth(w http.ResponseWriter, r *http.Request) bool {
	logger.Infof("Authenticate URL: %s\n", r.URL)
	// first check if it's a redirect
	if r.URL.Path == o.resource.Redirect {
		o.oauthRedirect(w, r)
	} else if r.Method != "GET" {
		errorMsg := ""
		// extract a jwt token in the header
		authstr := r.Header.Get("Authorization")
		if strings.HasPrefix(authstr, "Bearer") {
			jwt := strings.TrimSpace(authstr[len("Bearer"):])
			token, err := o.verify(jwt)
			if err != nil {
				errorMsg = err.Error()
			} else {
				if !o.authorize(r.URL.Path, token) {
					errorMsg = "Permission denied"
				}
			}
		} else {
			errorMsg = "Missing Authorization header"
		}
		if errorMsg != "" {
			logger.Error(errorMsg)
			w.WriteHeader(http.StatusUnauthorized)
			return false
		}
	}
	return true
}

func (o *OAuth2Impl) verify(jwtstr string) (*JWTTokenClaims, error) {
	token, err := jwt.ParseWithClaims(jwtstr, &JWTTokenClaims{},
		func(token *jwt.Token) (interface{}, error) {
			return []byte(JWT_SECRET), nil
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
	logger.Infof("JWT token verified for user: %s/%s", claims.UserId, claims.Roles)

	return claims, nil
}

func (o *OAuth2Impl) authorize(path string, token *JWTTokenClaims) bool {
	return true
}

func (o *OAuth2Impl) oauthRedirect(w http.ResponseWriter, r *http.Request) {
	// get the authorization code
	err := r.ParseForm()
	if err != nil {
		logger.Errorf("could not parse query: %v\n", err)
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	code := r.FormValue("code")
	logger.Infof("Received authorization code for %s: %s\n", o.resource.Name, code)
	accessToken, err := o.getAccessToken(code)
	if err != nil {
		logger.Errorf("could not get access token: %v\n", err)
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	logger.Infof("Received authorization code for %s: %s\n", o.resource.Name, accessToken)

	// store the access token & refresh token, and pass the JWT token back to the client

	// Finally, send a response to redirect the user to the "welcome" page
	// with the access token
	//w.Header().Set("Location", "/welcome.html?access_token="+t.AccessToken)
	//w.WriteHeader(http.StatusFound)
}

func (o *OAuth2Impl) createJWTToken(userId string, roles []string) (string, error) {
	expirationTime := time.Now().Add(5 * time.Minute)
	// Create the JWT claims, which includes the username and expiry time
	claims := &JWTTokenClaims{
		UserId: userId,
		Roles:  roles,
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

func (o *OAuth2Impl) getAccessToken(authorizationCode string) (string, error) {
	return "", nil
}
