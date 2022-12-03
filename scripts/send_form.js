function make_json() {
    var dev = document.getElementsByName("dev")[0].value
    var dft = document.getElementsByName("dft")[0].value
    var root_rate = document.getElementsByName("rt")[0].value
    var cln = document.getElementsByName("cln")[0].value
    var cloud = document.getElementById("cloud_input").checked

    var classes = document.querySelectorAll('div[name^=clss]')
    var filters = document.getElementsByName("filter")

    var parents = document.querySelectorAll('input[name^=parent]')
    var ids = document.querySelectorAll('input[name^=id]')
    var rates = document.querySelectorAll('input[name^=rate]')
    var ceilings = document.querySelectorAll('input[name^=ceiling]')

    var tc_tree = {};
    tc_tree['classes'] = [];
    tc_tree['filters'] = [];
    tc_tree['qdiscs'] = [];

    tc_tree.dev = dev;
    tc_tree.dft = dft;
    tc_tree.cloud = cloud;
    tc_tree.rate = root_rate;
    tc_tree.ceiling = cln;

    for (let i = 0; i < classes.length; i++) {
        tc_tree.classes.push({});
        tc_tree.classes[i]['dev'] = dev;
        tc_tree.classes[i]['parent'] = parents[i].value;
        tc_tree.classes[i]['id'] = ids[i].value;
        tc_tree.classes[i]['rate'] = rates[i].value;
        tc_tree.classes[i]['ceiling'] = ceilings[i].value;
    }



    console.log(classes);
    parents.forEach((parent) => {
        console.log(parent.value);
    })


    console.log(tc_tree);
    // classes.forEach((classe) => {
    //     document.get
    // })
}

function submit() {
    var jsonData = ('div').serializeArray();
    var jsonString = JSON.stringify(jsonData);
    console.log(jsonString);
}