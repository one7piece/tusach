package test

import (
	"dv.com.tusach/util"
	"fmt"
	"strconv"
	"testing"
	"time"
)

type EventSink struct {
	manager *util.EventManager
}

func (sink EventSink) HandleEvent(event util.EventData) {
	fmt.Printf("received: %s[%v]\n", event.Name, event.Data)
}

func TestEvent(t *testing.T) {
	c := make(util.EventChannel)
	em := util.CreateEventManager(c, 10)
	sinks := [10]EventSink{}
	for i := 0; i < 10; i++ {
		sinks[i] = EventSink{em}
		fmt.Printf("address of sink: %d\n", &sinks[i])
		em.StartListening(sinks[i])
	}
	for i := 0; i < 10; i++ {
		event := util.EventData{Name: "T1", Data: "event" + strconv.Itoa(i)}
		em.Push(event)
	}
	for i := 0; i < 10; i++ {
		em.StopListening(sinks[i])
	}

	time.Sleep(3 * time.Second)
}
