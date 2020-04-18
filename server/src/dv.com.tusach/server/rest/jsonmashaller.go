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
	GetRequestPayload(r *http.Request, dest interface{}) ([]byte, error)
	SetResponseValue(w http.ResponseWriter, value interface{})
	SetResponseError(w http.ResponseWriter, status int, message string)
	SetResponseOK(w http.ResponseWriter)
}

type JsonPbMarshaler struct {
}

func (jpb JsonPbMarshaler) GetRequestPayload(r *http.Request, dest interface{}) ([]byte, error) {
	protoMsg, ok := dest.(proto.Message)
	if !ok {
		logger.Errorf("argument is NOT a proto.Message: %s", reflect.TypeOf(dest))
		return nil, errors.New("argument is not a proto.Message")
	}
	defer r.Body.Close()
	dataBytes, err := ioutil.ReadAll(r.Body)
	if err != nil {
		return dataBytes, err
	}
	err = jsonpb.UnmarshalString(string(dataBytes), protoMsg)
	return dataBytes, err
}

func (jpb JsonPbMarshaler) SetResponseOK(w http.ResponseWriter) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json := "{\"error\": \"" + "\"}"
	fmt.Fprintf(w, "%s", json)
	logger.Infof("Response body: [%s]", json)
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
	json := "{\"error\": \"" + message + "\"}"
	fmt.Fprintf(w, "%s", json)
	logger.Warnf("Response error: %d [%s]", status, json)
}
