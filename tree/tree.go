package tree

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
)

type classes struct {
	Classes []class `json:"classes"`
}

type filters struct {
	Filters []filter `json:"filters"`
}

type qdiscs struct {
	Qdiscs []qdisc `json:"qdiscs"`
}

type rootHtb struct {
	Dev     string `json:"dev"`
	Dft     string `json:"dft"` //default queue
	Cloud   bool   `json:"cloud"`
	Rate    string `json:"rate"`
	Ceiling string `json:"ceiling"`
}

type class struct {
	Dev     string `json:"dev"`
	Parent  string `json:"parent"`
	Id      string `json:"id"`
	Rate    string `json:"rate"`
	Ceiling string `json:"ceiling"`
}

type filter struct {
	Dev    string `json:"dev"`
	Prio   string `json:"prio"`
	Ip     string `json:"ip"`
	Dport  string `json:"dport"`
	Flowid string `json:"flowid"`
}

type qdisc struct {
	Dev    string `json:"dev"`
	Parent string `json:"parent"`
	Handle string `json:"handle"`
}

func rootQdisc(root rootHtb) []string {
	var rootclass []string
	if root.Cloud {
		rootclass = []string{"tc qdisc add dev " + root.Dev + " root handle 1: htb default " + root.Dft + " direct_qlen 10000",
			"tc class add dev " + root.Dev + " parent 1: classid 1:1 htb rate " + root.Rate + " ceil " + root.Ceiling}
	} else if !root.Cloud {
		rootclass = []string{"tc qdisc add dev " + root.Dev + " root handle 1: htb default " + root.Dft,
			"tc class add dev " + root.Dev + " parent 1: classid 1:1 htb rate " + root.Rate + " ceil " + root.Ceiling}
	}
	return rootclass
}

func writeClasses(classes classes) []string {
	var clss []string
	for _, class := range classes.Classes {
		cls := "tc class add dev " + class.Dev + " parent " + class.Parent + " classid " + class.Id + " htb rate " + class.Rate + " ceil " + class.Ceiling
		clss = append(clss, cls)
	}
	return clss
}

func writeFilters(filters filters) []string {
	var fltrs []string
	for _, filter := range filters.Filters {
		fltr := "tc filter add dev " + filter.Dev + " protocol ip parent 1: prio " + filter.Prio + " u32 match ip dst " + filter.Ip + " match ip dport " + filter.Dport + " 0xffff flowid " + filter.Flowid
		fltrs = append(fltrs, fltr)
	}
	return fltrs
}

func writeQdiscs(qdiscs qdiscs) []string {
	var qdscs []string
	for _, qdisc := range qdiscs.Qdiscs {
		qdsc := "tc qdisc add dev " + qdisc.Dev + " parent " + qdisc.Parent + " handle " + qdisc.Handle + ": sfq perturb 10"
		qdscs = append(qdscs, qdsc)
	}
	return qdscs
}

func Build() {
	tree, err := os.ReadFile("mock.json")
	if err != nil {
		log.Fatal(err)
	}

	var root rootHtb
	var classes classes
	var filters filters
	var qdiscs qdiscs

	err = json.Unmarshal(tree, &root)
	if err != nil {
		log.Fatal(err)
	}
	err = json.Unmarshal(tree, &classes)
	if err != nil {
		log.Fatal(err)
	}
	err = json.Unmarshal(tree, &filters)
	if err != nil {
		log.Fatal(err)
	}
	err = json.Unmarshal(tree, &qdiscs)
	if err != nil {
		log.Fatal(err)
	}

	rootqdisc := rootQdisc(root)
	class := writeClasses(classes)
	filter := writeFilters(filters)
	qdisc := writeQdiscs(qdiscs)

	for _, i := range rootqdisc {
		fmt.Println(i)
	}
	for _, i := range class {
		fmt.Println(i)
	}
	for _, i := range filter {
		fmt.Println(i)
	}
	for _, i := range qdisc {
		fmt.Println(i)
	}
}
