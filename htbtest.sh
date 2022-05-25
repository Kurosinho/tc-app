#!/bin/bash
TC=tc
IF=eth1

add(){
	$TC qdisc add dev $IF root handle 1: htb default 2 direct_qlen 1000
	$TC class add dev $IF parent 1: classid 1:1 htb rate 25mbps ceil 25mbps

	$TC class add dev $IF parent 1:1 classid 1:2 htb rate 8mbps ceil 25mbps
	$TC class add dev $IF parent 1:1 classid 1:4 htb rate 17mbps ceil 25mbps

	$TC class add dev $IF parent 1:4 classid 1:41 htb rate 10mbps ceil 17mbps
	$TC class add dev $IF parent 1:4 classid 1:42 htb rate 7mbps ceil 17mbps

	$TC filter add dev $IF parent 1: prio 1 u32 match ip dst 10.3.0.2 \
		match ip dport 2000 0xffff flowid 1:41
	$TC filter add dev $IF parent 1: prio 2 u32 match ip dst 10.3.0.2 \
		match ip dport 1000 0xffff flowid 1:42

	$TC qdisc add dev $IF parent 1:2 handle 20: sfq perturb 10
	$TC qdisc add dev $IF parent 1:41 handle 410: sfq perturb 10
	$TC qdisc add dev $IF parent 1:42 handle 420: sfq perturb 10
}

remove(){
	$TC qdisc del dev $IF root handle 1: htb
}

case "$1" in
	add)
		echo -n "Adding traffic control - htbtest1..."
		add
		echo "Added"
		;;
	
	remove)
		echo -n "Removing traffic control - htbtest1..."
		remove
		echo "Removed"
		;;

	*)
		pwd=$(pwd)
		echo "Usage: htbtest1.sh {add|remove}"
		;;
esac
exit 0
