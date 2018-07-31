package test

import (
	"strconv"
	"testing"
	"time"

	"dv.com.tusach/logger"
	"dv.com.tusach/util"
)

type EventSink struct {
	id             int
	expectedEvents []string
}

func (sink *EventSink) ProcessEvent(event util.EventData) {
	count := len(sink.expectedEvents)
	index := -1
	for i := 0; i < count; i++ {
		if sink.expectedEvents[i] == event.Data {
			index = i
			break
		}
	}
	if index == -1 {
		logger.Infof("%d received: %s[%+v], event not found in list[%v]\n", sink.id, event.Channel, event.Data, sink.expectedEvents)
	} else {
		sink.expectedEvents = append(sink.expectedEvents[:index], sink.expectedEvents[(index+1):]...)
		logger.Infof("%d received: %s[%+v], event list remaining[%v]\n", sink.id, event.Channel, event.Data, sink.expectedEvents)
	}
}

func TestEvent(t *testing.T) {
	em := util.GetEventManager()
	const numEvents = 10
	events := [numEvents]string{}
	for i := 0; i < len(events); i++ {
		events[i] = "event" + strconv.Itoa(i+1)
	}
	logger.Infof("event list address: %p\n", &events)

	const numSinks = 2
	sinks := [numSinks]EventSink{}
	for i := 0; i < numSinks; i++ {
		arr := make([]string, len(events))
		copy(arr, events[:])
		sinks[i] = EventSink{id: i + 1, expectedEvents: arr}
		logger.Infof("sink %d event list address: %p\n", sinks[i].id, &sinks[i].expectedEvents)
		em.StartListening("testChannel", &sinks[i])
	}
	listeners := em.GetListeners("testChannel")
	if len(listeners) != len(sinks) {
		t.Errorf("Register listeners failed! expected %d, got %d\n", len(sinks), len(listeners))
		t.FailNow()
	}

	for i := 0; i < len(listeners); i++ {
		ptr, ok := listeners[i].(*EventSink)
		if !ok || ptr != &sinks[i] {
			t.Errorf("Register listener[%d] failed! ", i)
			t.FailNow()
		}
	}

	// push events
	for i := 0; i < len(events); i++ {
		em.Push(util.EventData{Channel: "testChannel", Data: events[i]})
	}

	time.Sleep(3 * time.Second)

	for i := 0; i < len(sinks); i++ {
		if len(sinks[i].expectedEvents) != 0 {
			t.Errorf("Some events are not received for sink %d", i)
			t.FailNow()
		}
		em.StopListening(&sinks[i])
	}

	if len(em.GetListeners("testChannel")) != 0 {
		t.Errorf("Unregister listeners failed! expected %d, got %d\n", 0, em.GetListeners("testChannel"))
		t.FailNow()
	}
}
