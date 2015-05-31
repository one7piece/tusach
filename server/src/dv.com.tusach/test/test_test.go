package test

import (
	"fmt"
	"log"
	"reflect"
	//"strconv"
	"bytes"
	"dv.com.tusach/util"
	"github.com/PuerkitoBio/goquery"
	//"golang.org/x/net/html"
	"io/ioutil"
	"regexp"
	"strings"
	"testing"
	"time"
)

type MyInt int

type User struct {
	Name       string
	Role       string
	Password   string
	UpdateTime time.Time
}

var mymap map[string]User

func xTestGoQuery(t *testing.T) {
	log.Printf("\nTestGoQuery...")
	data, _ := ioutil.ReadFile("/home/dvan/vshared/dv/tusach/server/library/test.html")
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(string(data)))
	if err != nil {
		t.Error("cannot read html file")
		return
	}

	var buffer bytes.Buffer
	doc.Find("div#chapter_content").Each(func(i int, s *goquery.Selection) {
		html, _ := s.Html()
		log.Printf("\nFound chapter content:\n%s\n", html)

		s.Find("p, br, span:not([style*=\"font-size: 0\"], [style*=\"font-size: 1.\"])").Each(func(i int, s *goquery.Selection) {
			if len(s.Nodes) == 1 && len(s.Nodes[0].Attr) == 0 {
				if s.Nodes[0].Data == "p" {
					buffer.WriteString("<br/><br/>")
				} else {
					buffer.WriteString("<br/>")
				}
			} else {
				//log.Printf("\nnode: ---'%s'---\n", s.Text())
				buffer.WriteString(s.Text())
			}
		})
		log.Printf("\nFound text:\n%s\n", buffer.String())
	})
}

func TestRegexp(t *testing.T) {
	data, err := ioutil.ReadFile("/home/dvan/vshared/dv/thanh-guom-ho-phach.htm")
	if err != nil {
		t.Error(err)
	}
	//s := string(data)
	re, _ := regexp.Compile("Chương và tiết mục lục")
	arr2d := re.FindAllIndex(data, -1)
	var buf bytes.Buffer
	index := 0
	for i := 0; i < len(arr2d); i++ {
		arr := arr2d[i]
		fmt.Printf("found: '%s' at %d-%d\n", string(data[arr[0]:arr[1]]), arr[0], arr[1])
		offset := arr[0] - 100
		s1 := string(data[offset:arr[0]])
		if strings.LastIndex(s1, "<h1>") == -1 {
			startIndex := strings.LastIndex(s1, "<p ")
			s2 := string(data[arr[0] : arr[0]+100])
			endIndex := strings.Index(s2, "</p>")

			buf.Write(data[index : offset+startIndex])
			buf.WriteString("<h1>")
			buf.Write(data[arr[0] : arr[0]+strings.Index(s2, "<")])
			buf.WriteString("</h1>")
			index = arr[0] + endIndex + len("</p>")
			fmt.Printf("startIndex:%d, new index:%d\n", offset+startIndex, index)
			if i > 10 {
				break
			}
		}
	}
	util.SaveFile("/home/dvan/vshared/dv/thanh-guom-ho-phach-updated.htm", buf.Bytes())
}

func xTestListDir(t *testing.T) {
	names, err := util.ListDir("/home/dvan/vshared/dv", true)
	if err != nil {
		t.Error(err)
	}
	fmt.Printf("names-filesonly: %v\n", names)
	names, err = util.ListDir("/home/dvan/vshared/dv", false)
	if err != nil {
		t.Error(err)
	}
	fmt.Printf("names-files-dirs: %v\n", names)
}

func xTestFuncReturn(t *testing.T) {
	mymap = make(map[string]User)
	mymap["dung"] = User{Name: "dung", Role: "admin"}

	user := getUser("dung")
	log.Printf("dung1=%+v\n", user)

	user.Role = "operator"
	changed_user := getUser("dung")
	log.Printf("dung2=%+v\n", changed_user)

	user = mymap["dung"]
	user.Role = "operator"
	log.Printf("dung3=%+v\n", mymap["dung"])
}

func getUser(name string) User {
	return mymap[name]
}

func xTestChannel2(t *testing.T) {
	c := make(chan string)
	for i := 0; i < 5; i++ {
		go func(i int) {
			msg := <-c
			log.Println(msg)
			c <- msg
		}(i)
	}

	log.Printf("Sending message: %s\n", "Hello")
	c <- "Hello"
	log.Printf("Sent message: %s\n", <-c)

	log.Printf("Closing channel\n")
	close(c)
	log.Printf("Closed channel\n")
	time.Sleep(10 * time.Second)
}

func xTestChannel1(t *testing.T) {
	c := make(chan string)

	for i := 0; i < 2; i++ {
		go func(i int) {
			msg := <-c
			log.Println(msg)
		}(i)
	}

	log.Printf("Sending message: %s\n", "Hello")
	c <- "Hello"
	log.Printf("Sent message: %s\n", <-c)
	time.Sleep(1 * time.Second)

	log.Printf("Closing channel\n")
	close(c)
	log.Printf("Closed channel\n")
	time.Sleep(10 * time.Second)
}

func xTestReflect(t *testing.T) {
	var x int = 3
	var y MyInt = 4
	var z interface{}
	z = y

	var vox = reflect.ValueOf(x)
	var voy = reflect.ValueOf(y)
	var voz = reflect.ValueOf(z)

	fmt.Printf("TypeOf(x):%v, ValueOf(x):%v, Type:%v, Kind:%v, value:%v\n", reflect.TypeOf(x), vox, vox.Type(), vox.Kind(), vox.Int())
	fmt.Printf("TypeOf(y):%v, ValueOf(y):%v, Type:%v, Kind:%v, value:%v\n", reflect.TypeOf(y), voy, voy.Type(), voy.Kind(), voy.Int())
	fmt.Printf("TypeOf(z):%v, ValueOf(z):%v, Type:%v, Kind:%v, value:%v\n", reflect.TypeOf(z), voz, voz.Type(), voz.Kind(), voz.Int())

	// print the value of the reflection object
	fmt.Printf("interface(x): %v\n", vox.Interface())

	// set value of x to 333
	p := reflect.ValueOf(&x)
	fmt.Printf("type of p:%v, settability of p:%v\n", p.Type(), p.CanSet())
	v := p.Elem() // de-reference p
	fmt.Printf("type of v:%v, settability of v:%v\n", v.Type(), v.CanSet())
	v.SetInt(333)
	fmt.Println("new x:", x)

	// create new instance of type int
	p = reflect.New(reflect.TypeOf(x))
	fmt.Printf("p_x2: %v\n", p)
	v = p.Elem()
	fmt.Printf("p_x2.Elem(): %v\n", v)
	v.SetInt(3333)
	fmt.Printf("x2: %v\n", v.Interface())

	// create new instance of type MyInt
	p = reflect.New(reflect.TypeOf(y))
	fmt.Printf("p_y2: %v\n", p)
	v = p.Elem()
	fmt.Printf("p_y2.Elem(): %v\n", v)
	v.SetInt(4444)
	fmt.Printf("y2: %v\n", v.Interface())

	p = reflect.New(reflect.TypeOf(User{}))
	v = p.Elem()
	v.FieldByName("Name").SetString("dvan")
	v.FieldByName("Password").SetString("pwd")

	now := time.Now()
	var t0 interface{}
	t0 = now
	v.FieldByName("UpdateTime").Set(reflect.ValueOf(t0))

	fmt.Printf("user type: %v\n", v.Type())
	for i := 0; i < v.NumField(); i++ {
		fmt.Printf("user field: %s=%v\n", v.Type().Field(i).Name, v.Field(i).Interface())
	}
}

func xTestFieldConversion(t *testing.T) {
	user := User{Name: "dvan", Role: "admin", UpdateTime: time.Now()}
	vo := reflect.ValueOf(user)
	field, _ := vo.Type().FieldByName("Name")

	v := field2db(field.Type, vo.FieldByName("Name").Interface())
	fmt.Printf("field2db: %T(%v)\n", v, v)

	field, _ = vo.Type().FieldByName("UpdateTime")
	v = field2db(field.Type, vo.FieldByName("UpdateTime").Interface())
	fmt.Printf("field2db: %T(%v)\n", v, v)

	str, _ := fromDateTime(time.Now())
	v = db2field(field.Type, str)
	fmt.Printf("db2field: %T(%v)\n", v, v)
}

func field2db(fieldType reflect.Type, fieldValue interface{}) interface{} {
	var result interface{}
	if fieldType == reflect.TypeOf(time.Time{}) {
		result, _ = fromDateTime(fieldValue.(time.Time))
	} else if fieldType.Kind() == reflect.Int {
		result = fieldValue.(int)
	} else if fieldType.Kind() == reflect.Bool {
		if fieldValue.(bool) {
			result = 1
		} else {
			result = 0
		}
	} else {
		result = fieldValue.(string)
	}
	return result
}

func db2field(fieldType reflect.Type, dbValue interface{}) interface{} {
	var result interface{}
	if fieldType == reflect.TypeOf(time.Time{}) {
		result, _ = toDateTime(dbValue.(string))
	} else if fieldType.Kind() == reflect.Int {
		result = dbValue.(int)
	} else if fieldType.Kind() == reflect.Bool {
		if dbValue.(int) == 0 {
			result = false
		} else {
			result = true
		}
	} else {
		result = dbValue.(string)
	}
	return result
}

func xTestDateTime(t *testing.T) {
	now := time.Now()
	str, _ := fromDateTime(now)
	fmt.Printf("time str: %s\n", str)
	dt, _ := toDateTime(str)
	fmt.Printf("time obj: %v\n", dt)
}

func toDateTime(str string) (time.Time, error) {
	return time.Parse(time.RFC3339, str)
}

func fromDateTime(t time.Time) (string, error) {
	buffer, err := t.MarshalText()
	return string(buffer), err
}
