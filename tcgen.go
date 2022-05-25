package main

import (
	"fmt"
	"strconv"
)

func tcRootQdisc(dev string, queue string, mod string, value string) string {
	return "tc qdisc add dev " + dev + " root " + queue + " " + mod + " " + value
}

func tcParentQdisc(dev string, parent string, handle string, queue string, mod string, value string) string {
	return "tc qdisc add dev " + dev + " parent " + parent + " handle " + handle + " " + queue + " " + mod + " " + value
}

func tcRootHtb(dev string, major int, deflt int, cloud bool) string {
	var htb string
	if cloud == false {
		htb = "tc qdisc add dev " + dev + " root handle " + strconv.Itoa(major) + ": htb default " + strconv.Itoa(deflt)
	} else if cloud == true {
		htb = "tc qdisc add dev " + dev + " root handle " + strconv.Itoa(major) + ": htb default " + strconv.Itoa(deflt) + " direct_qlen 1000"
	}
	return htb
}

func tcClass(dev string, parent string, classid string, rate string, ceil string) string {
	return "tc class add dev " + dev + " parent " + parent + " classid " + classid + " htb rate " + rate + " ceil " + ceil
}

func tcFilter(dev string, protocol string, parent string, prio int, ip string, port int, flowid string) string {
	return "tc filter add dev " + dev + " protocol " + protocol + " parent " + parent + " prio " + strconv.Itoa(prio) + " u32 match ip dst " + ip + " dport " + strconv.Itoa(port) + " 0xffff flowid " + flowid
}

//func treeGen(iface string, ip string, no_of_classes int, maxSpeed string)

// It has to create different kinds of trees e.g. with different numbers of classes under the root class.
// And it has to dive deeper to allow creation of subclasses in different classes e.g. one class without subclasses, and one with two subclasses.
// One more for loop. Number of floors. This will allow to create the required number of levels in a tree, and then the following loops will allow it
// to create the classes and subclasses for them. Filters and Qdiscs should be fine the way they are now.

func main() {

	var iface string
	var ip string
	var no_of_classes int

	fmt.Println("Name of interface: ")
	fmt.Scanln(&iface)

	fmt.Println("IP address: ")
	fmt.Scanln(&ip)

	fmt.Println("How many classes do you want under the root qdisc? ")
	fmt.Scanln(&no_of_classes)

	rootQdisc := tcRootHtb(iface, 1, 5, true)
	rootClass := tcClass(iface, "1:", "1:1", "15mbps", "15mbps")

	floor := []string{}
	filters := []string{}
	qdiscs := []string{}

	for i := 0; i < no_of_classes; i++ {

		var speed string
		var child string
		var parent string
		var handle string

		fmt.Printf("Number of the %d class:\n", i+1)
		fmt.Scanln(&child)
		fmt.Println("Max speed of the class:")
		fmt.Scanln(&speed)

		class := tcClass(iface, "1:1", "1:"+child, speed, "15mbps")
		floor = append(floor, class)

		if i < no_of_classes-1 {

			var priority int
			var flow string
			var port int

			fmt.Printf("Priority of the %d filter: \n", i)
			fmt.Scan(&priority)
			fmt.Println("Class to which the filter will be attached: ")
			fmt.Scanln(&flow)
			fmt.Println("Port: ")
			fmt.Scanln(&port)

			filter := tcFilter(iface, "ip", "1:", priority, ip, port, flow)
			filters = append(filters, filter)
		}

		fmt.Println("Parent class of the qdisc: ")
		fmt.Scanln(&parent)
		fmt.Println("Handle: ")
		fmt.Scanln(&handle)

		qdisc := tcParentQdisc(iface, parent, handle, "sfq", "perturb", "10")
		qdiscs = append(qdiscs, qdisc)
	}

	fmt.Println(rootQdisc)
	fmt.Println(rootClass)

	for i := 0; i < len(floor); i++ {
		fmt.Println(floor[i])
	}

	for i := 0; i < len(filters); i++ {
		fmt.Println(filters[i])
	}

	for i := 0; i < len(qdiscs); i++ {
		fmt.Println(qdiscs[i])
	}
}
