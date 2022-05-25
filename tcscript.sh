#!/bin/bash

TC=tc

IF=eth1

add() {
	#This configuration setting is included, because the default qdisc - pfifo - has a default queue size of 0
    #If you want to use HTB for classful queueing, then make sure to reconfigure the default qdisc on the interface
	#Order of rules applied matters - make sure it's in this order: root qdisc, class 1:1, classes, qdiscs for classes, filters for classes
	
	#This creates the root and first class 1:1, to which the rest of the tree will be attatched
	$TC qdisc add dev $IF root handle 1: htb default 5 direct_qlen 100000
	$TC class add dev $IF parent 1: classid 1:1 htb rate 15mbps ceil 15mbps

	#First - creating classes. The 'rate' parameter is mandatory
	$TC class add dev $IF parent 1:1 classid 1:3 htb rate 7mbps ceil 15mbps
	$TC class add dev $IF parent 1:1 classid 1:5 htb rate 3mbps ceil 15mbps
	$TC class add dev $IF parent 1:1 classid 1:7 htb rate 5mbps ceil 15mbps

	#Third - filters for each class (1:5 is the "catch-all" class so it doesn't need one
	$TC filter add dev $IF protocol ip parent 1: prio 1 u32 match ip dst 10.3.0.2 \
		match ip dport 5000 0xffff flowid 1:3

	$TC filter add dev $IF protocol ip parent 1: prio 2 u32 match ip dst 10.3.0.2 \
        match ip dport 5200 0xffff flowid 1:7

	#Second - creating qdiscs for those classes
    $TC qdisc add dev $IF parent 1:3 handle 13: sfq perturb 10
    $TC qdisc add dev $IF parent 1:5 handle 15: sfq perturb 10
    $TC qdisc add dev $IF parent 1:7 handle 17: sfq perturb 10
}

remove() {
	$TC qdisc del dev $IF root handle 1: htb
}


case "$1" in
	add)
		echo -n "Adding traffic control..."
		add
		echo "Added"
		;;

	remove)
		echo -n "Removing traffic control..."
		remove
		echo "Removed"
		;;

	*)
		pwd=$(pwd)
		echo "Usage: tcscript.sh {add|remove}"
		;;
esac
exit 0
