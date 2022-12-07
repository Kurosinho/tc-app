async function make_json() {
    var dev = document.getElementsByName("dev")[0].value
    var dft = document.getElementsByName("dft")[0].value
    var root_rate = document.getElementsByName("rt")[0].value
    var cln = document.getElementsByName("cln")[0].value
    var cloud = document.getElementById("cloud_input").checked

    var classes = document.querySelectorAll('div[name^=clss]')
    var filters = document.querySelectorAll('div[name^=filter')

    var parents = document.querySelectorAll('input[name^=parent]')
    var ids = document.querySelectorAll('input[name^=id]')
    var rates = document.querySelectorAll('input[name^=rate]')
    var ceilings = document.querySelectorAll('input[name^=ceiling]')

    var prios = document.querySelectorAll('input[name^=prio]')
    var ips = document.querySelectorAll('input[name^=ip]')
    var dports = document.querySelectorAll('input[name^=dport')
    var flowids = document.querySelectorAll('input[name^=flowid')
    var div = document.getElementById('results');

    var tc_tree = {};
    tc_tree.dev = dev;
    tc_tree.dft = dft;
    tc_tree.cloud = cloud;
    tc_tree.rate = root_rate;
    tc_tree.ceiling = cln;

    tc_tree['classes'] = [];
    tc_tree['filters'] = [];
    tc_tree['qdiscs'] = [];


    for (let i = 0; i < classes.length; i++) {
        tc_tree.classes.push({});
        tc_tree.classes[i]['dev'] = dev;
        tc_tree.classes[i]['parent'] = parents[i].value;
        tc_tree.classes[i]['id'] = ids[i].value;
        tc_tree.classes[i]['rate'] = rates[i].value;
        tc_tree.classes[i]['ceiling'] = ceilings[i].value;

        tc_tree.qdiscs.push({});
        tc_tree.qdiscs[i]['dev'] = dev;
        tc_tree.qdiscs[i]['parent'] = ids[i].value.slice(-1);
        tc_tree.qdiscs[i]['handle'] = "1" + ids[i].value.slice(-1);
    }

    for (let i = 0; i < filters.length; i++) {
        tc_tree.filters.push({});
        tc_tree.filters[i]['dev'] = dev;
        tc_tree.filters[i]['prio'] = prios[i].value;
        tc_tree.filters[i]['ip'] = ips[i].value;
        tc_tree.filters[i]['dport'] = dports[i].value;
        tc_tree.filters[i]['flowid'] = flowids[i].value;
    }
    console.log(tc_tree);

    let url = 'http://localhost:8888/build';

    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tc_tree)
    });

    if (res.ok) {
        res.json().then(data => {
            var trees = data.response;
            trees.forEach(tree => {
                var ret = document.createElement('div');
                ret.setAttribute("class", "flex justify-center");
                ret.innerHTML = tree
                div.append(ret);
            });
            console.log(data);
        });
        return rets.data;
    } else {
        return `HTTP error: ${res.status}`;
    }
}