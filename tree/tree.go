package tree

import (
	"encoding/json"
	"fmt"
)

type TcClasses struct {
	Classes []class `json:"classes"`
}

type TcFilters struct {
	Filters []filter `json:"filters"`
}

type TcQdiscs struct {
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

var root rootHtb
var classes TcClasses
var filters TcFilters
var qdiscs TcQdiscs

func rootQdisc(root rootHtb) ([]string, error) {
	var rootclass []string

	switch {
	case root.Dev == "":
		return nil, fmt.Errorf("error: no network interface specified")

	case root.Dft == "":
		return nil, fmt.Errorf("error: no default queue specified")

	case root.Rate == "":
		return nil, fmt.Errorf("error: no min rate specified")

	case root.Ceiling == "":
		return nil, fmt.Errorf("error: no max rate specified")
	}

	if root.Cloud {
		rootclass = []string{"tc qdisc add dev " + root.Dev + " root handle 1: htb default " + root.Dft + " direct_qlen 10000",
			"tc class add dev " + root.Dev + " parent 1: classid 1:1 htb rate " + root.Rate + " ceil " + root.Ceiling}
	} else if !root.Cloud {
		rootclass = []string{"tc qdisc add dev " + root.Dev + " root handle 1: htb default " + root.Dft,
			"tc class add dev " + root.Dev + " parent 1: classid 1:1 htb rate " + root.Rate + " ceil " + root.Ceiling}
	}
	return rootclass, nil
}

func writeClasses(classes TcClasses) ([]string, error) {
	var clss []string

	for _, class := range classes.Classes {

		switch {
		case class.Dev == "":
			return nil, fmt.Errorf("error: no network interface specified")

		case class.Id == "":
			return nil, fmt.Errorf("error: no id specified")

		case class.Rate == "":
			return nil, fmt.Errorf("error: no min rate specified")

		case class.Ceiling == "":
			return nil, fmt.Errorf("error: no max rate specified")
		}

		cls := "tc class add dev " + class.Dev + " parent " + class.Parent + " classid " + class.Id + " htb rate " + class.Rate + " ceil " + class.Ceiling
		clss = append(clss, cls)
	}
	return clss, nil
}

func writeFilters(filters TcFilters) ([]string, error) {
	var fltrs []string
	for _, filter := range filters.Filters {

		switch {
		case filter.Dev == "":
			return nil, fmt.Errorf("error: no network interface specified")

		case filter.Prio == "":
			return nil, fmt.Errorf("error: no id specified")

		case filter.Ip == "":
			return nil, fmt.Errorf("error: no min rate specified")

		case filter.Dport == "":
			return nil, fmt.Errorf("error: no max rate specified")

		case filter.Flowid == "":
			return nil, fmt.Errorf("error: no flowid specified")
		}

		fltr := "tc filter add dev " + filter.Dev + " protocol ip parent 1: prio " + filter.Prio + " u32 match ip dst " + filter.Ip + " match ip dport " + filter.Dport + " 0xffff flowid 1:" + filter.Flowid
		fltrs = append(fltrs, fltr)
	}
	return fltrs, nil
}

func writeQdiscs(qdiscs TcQdiscs) ([]string, error) {
	var qdscs []string
	for _, qdisc := range qdiscs.Qdiscs {

		switch {
		case qdisc.Dev == "":
			return nil, fmt.Errorf("error: no network interface specified")

		case qdisc.Parent == "":
			return nil, fmt.Errorf("error: no parent specified")

		case qdisc.Handle == "":
			return nil, fmt.Errorf("error: no min rate specified")
		}

		qdsc := "tc qdisc add dev " + qdisc.Dev + " parent 1:" + qdisc.Parent + " handle " + qdisc.Handle + ": sfq perturb 10"
		qdscs = append(qdscs, qdsc)
	}
	return qdscs, nil
}

func Build(tree []byte) ([]string, error) {
	var response []string

	err := json.Unmarshal(tree, &root)
	if err != nil {
		return nil, err
	}
	err = json.Unmarshal(tree, &classes)
	if err != nil {
		return nil, err
	}
	err = json.Unmarshal(tree, &filters)
	if err != nil {
		return nil, err
	}
	err = json.Unmarshal(tree, &qdiscs)
	if err != nil {
		return nil, err
	}

	rootqdisc, err := rootQdisc(root)
	if err != nil {
		return nil, err
	}
	class, err := writeClasses(classes)
	if err != nil {
		return nil, err
	}
	filter, err := writeFilters(filters)
	if err != nil {
		return nil, err
	}
	qdisc, err := writeQdiscs(qdiscs)
	if err != nil {
		return nil, err
	}

	response = append(response, rootqdisc...)
	response = append(response, class...)
	response = append(response, filter...)
	response = append(response, qdisc...)

	return response, nil
}
