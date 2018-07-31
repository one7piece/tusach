package test

import (
	"fmt"
	"sync"
	"testing"
	"time"
)

var wg sync.WaitGroup

func TestWaitGroup(t *testing.T) {
	// increment the WaitGroup counter
	wg.Add(1)

	t0 := time.Now()

	// launch goroutine to do some work
	go func() {
		// decrement the WaitGroup counter when goroutine completes
		defer wg.Done()
		// do the work, simulate by sleeping for 5 seconds
		time.Sleep(5 * time.Second)
	}()

	wg.Wait()

	elapsed := time.Now().Sub(t0)
	fmt.Printf("routine took %v seconds\n", elapsed.Seconds())
}

func TestMutex(t *testing.T) {

}

var once sync.Once
var initCount = 0

func TestSyncOnce(t *testing.T) {
	for i := 0; i < 10; i++ {
		invoke()
	}
}

func invoke() {
	once.Do(func() {
		initCount++
		fmt.Printf("initializing %d\n", initCount)
	})
}
