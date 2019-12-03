package util

import (
	"reflect"
	"sync"

	"dv.com.tusach/logger"
)

const ()

type EventData struct {
	Channel string // BookChannel
	Type    string // add, update, delete, abort
	Data    interface{}
}

type EventHandler interface {
	ProcessEvent(event EventData)
}

type EventManager struct {
	listeners  map[string][]EventHandler
	eventQueue chan EventData
}

var eventManager *EventManager
var once sync.Once

func GetEventManager() *EventManager {
	once.Do(func() {
		eventManager = &EventManager{listeners: make(map[string][]EventHandler), eventQueue: make(chan EventData, 100)}
		// create dispatch goroutines
		go eventManager.dispatcher()
	})
	return eventManager
}

// push the event to the channel
func (em *EventManager) Push(event EventData) {
	logger.Infof("pushing: %s[%v]\n", event.Channel, event.Data)
	em.eventQueue <- event
}

func (em *EventManager) StartListening(channel string, listener EventHandler) {
	arr, ok := em.listeners[channel]
	if !ok {
		em.listeners[channel] = []EventHandler{listener}
	} else {
		// append to array
		em.listeners[channel] = append(arr, listener)
	}
}

func (em EventManager) GetListeners(channel string) []EventHandler {
	arr, ok := em.listeners[channel]
	if !ok {
		return []EventHandler{}
	}
	return arr
}

func FindArrayItemIndex(slice interface{}, item interface{}) int {
	s := reflect.ValueOf(slice)
	if s.Kind() != reflect.Slice {
		panic("FindArrayItemIndex() given a non-slice type")
	}
	// convert interface{} to []interface{}
	arr := make([]interface{}, s.Len())
	for i := 0; i < s.Len(); i++ {
		arr[i] = s.Index(i).Interface()
	}

	index := -1
	for i, l := range arr {
		if l == item {
			index = i
			break
		}
	}
	return index
}

func (em *EventManager) StopListening(listener EventHandler) {
	for key, arr := range em.listeners {
		index := FindArrayItemIndex(arr, listener)
		if index != -1 {
			em.listeners[key] = append(arr[:index], arr[index+1:]...)
		} else {
			logger.Infof("StopListening - No listener found for channel %s\n", key)
		}
	}
}

func (em *EventManager) dispatcher() {
	for event := range em.eventQueue {
		logger.Debugf("dispatcher - dispatching event: %+v\n", event)
		arr, ok := em.listeners[event.Channel]
		if ok {
			for _, handler := range arr {
				handler.ProcessEvent(event)
			}
		}
	}
	logger.Info("dispatcher - terminated")
}
