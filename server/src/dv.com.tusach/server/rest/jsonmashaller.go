package rest

import (
	"errors"
	"fmt"
	"io/ioutil"
	"net/http"
	_ "net/http/pprof"
	"reflect"

	"dv.com.tusach/logger"

	"github.com/golang/protobuf/jsonpb"
	"github.com/golang/protobuf/proto"
)

type JsonMarshaler interface {
	GetRequestPayload(r *http.Request, dest interface{}) error
	SetResponseValue(w http.ResponseWriter, value interface{})
	SetResponseError(w http.ResponseWriter, status int, message string)
	SetResponseString(w http.ResponseWriter, value string)
}

type JsonPbMarshaler struct {
}

func (jpb JsonPbMarshaler) GetRequestPayload(r *http.Request, dest interface{}) error {
	protoMsg, ok := dest.(proto.Message)
	if !ok {
		logger.Errorf("argument is NOT a proto.Message: %s", reflect.TypeOf(dest))
		return errors.New("argument is not a proto.Message")
	}
	bytes, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		return err
	}
	err = jsonpb.UnmarshalString(string(bytes), protoMsg)
	return err
}

func (jpb JsonPbMarshaler) SetResponseString(w http.ResponseWriter, value string) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "%s", value)
	logger.Infof("Response body: [%s]", value)
}

func (jpb JsonPbMarshaler) SetResponseValue(w http.ResponseWriter, value interface{}) {
	protoMsg, ok := value.(proto.Message)
	if !ok {
		logger.Errorf("argument is NOT a proto.Message: %s", reflect.TypeOf(value))
		jpb.SetResponseError(w, http.StatusInternalServerError, "Error during marshaling response value")
		return
	}
	ms := jsonpb.Marshaler{}
	json, err := ms.MarshalToString(protoMsg)
	if err != nil {
		jpb.SetResponseError(w, http.StatusInternalServerError, err.Error())
	} else {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		fmt.Fprintf(w, "%s", json)
		logger.Infof("Response body: [%s]", json)
	}
}

func (jpb JsonPbMarshaler) SetResponseError(w http.ResponseWriter, status int, message string) {
	w.WriteHeader(status)
	fmt.Fprintf(w, "%s", message)
	logger.Warnf("Response error: %d [%s]", status, message)
}
