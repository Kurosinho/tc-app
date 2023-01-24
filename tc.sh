tc qdisc add dev dev1 root handle 1: htb default 5 direct_qlen 100000
tc class add dev dev1 parent 1: classid 1:1 htb rate 15mbps ceil 15mbps

tc class add dev dev1 parent 1:1 classid 1:3 htb rate 7mbps ceil 15mbps
tc class add dev dev1 parent 1:1 classid 1:5 htb rate 3mbps ceil 15mbps
tc class add dev dev1 parent 1:1 classid 1:7 htb rate 5mbps ceil 15mbps

tc filter add dev dev1 protocol ip parent 1: prio 1 u32 match ip dst 10.3.0.2 \
    match ip dport 5000 0xffff flowid 1:3

tc filter add dev dev1 protocol ip parent 1: prio 2 u32 match ip dst 10.3.0.2 \
    match ip dport 5200 0xffff flowid 1:7

tc qdisc add dev dev1 parent 1:3 handle 13: sfq perturb 10
tc qdisc add dev dev1 parent 1:5 handle 15: sfq perturb 10
tc qdisc add dev dev1 parent 1:7 handle 17: sfq perturb 10
