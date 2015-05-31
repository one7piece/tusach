package util

import (
	"fmt"
)

type EventData struct {
	Name string
	Data interface{}
}

type EventChannel chan EventData

type EventHandler interface {
	HandleEvent(event EventData)
}

type EventManager struct {
	Channel    EventChannel
	outChannel EventChannel
	listeners  []EventHandler
	Closed     bool
}

func CreateEventManager(c EventChannel, bufferSize int) *EventManager {
	em := EventManager{Channel: c, Closed: false}
	em.outChannel = make(EventChannel, bufferSize)
	em.listeners = []EventHandler{}

	// create routine to listen for event
	go func(mgr *EventManager) {
		for ev := range mgr.Channel {
			// write to the output channel
			mgr.outChannel <- ev
			// push back to the original channel, so other event manager may receive
			if !mgr.doPush(ev) {
				break
			}
		}
		fmt.Println("EventManager - inbound channel is closed")
		// close the outbound channel
		close(mgr.outChannel)
	}(&em)

	// create routine to dispatch events
	go func(mgr *EventManager) {
		for ev := range mgr.outChannel {
			mgr.dispatch(ev)
		}
		fmt.Println("EventManager - outbound channel is closed")
	}(&em)

	return &em
}

func (em *EventManager) StartListening(listener EventHandler) {
	fmt.Printf("address of listener: %d\n", &listener)
	/*
		for _, l := range em.listeners {
			if l == listener {
				fmt.Println("ignore duplicate listener")
				return
			}
		}
	*/
	em.listeners = append(em.listeners, listener)
	//fmt.Printf("added listener, count=%d\n", len(em.listeners))
}

func (em *EventManager) StopListening(listener EventHandler) {
	index := -1
	for i, l := range em.listeners {
		if &l == &listener {
			index = i
			break
		}
	}
	if index != -1 {
		em.listeners = append(em.listeners[:index], em.listeners[index+1:]...)
	} else {
		fmt.Println("StopListening() - Not found")
	}
}

// push the event to the channel
func (em *EventManager) Push(event EventData) {
	if em.Closed {
		return
	}

	fmt.Printf("pushing: %s[%v]\n", event.Name, event.Data)
	if em.doPush(event) {
		<-em.Channel
	}
}

// dispatch the event to the listeners
func (em *EventManager) dispatch(event EventData) {
	fmt.Printf("dispatching: %s[%v] to %d listeners\n", event.Name, event.Data, len(em.listeners))
	for _, l := range em.listeners {
		l.HandleEvent(event)
	}
}

// do push the event to the channel, return true if channel is still open
// this function recover from panic when pushing to a closed channel
func (em *EventManager) doPush(event EventData) (ok bool) {
	defer func() {
		if err := recover(); err != nil {
			fmt.Println("recover from panic: ", err)
			ok = false
			em.Closed = true
		}
	}()
	em.Channel <- event
	return true
}
