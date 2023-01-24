var no_of_class = 0;
var no_of_filter = 0;
function add_class() {
    var outside_div = document.createElement("div");
    outside_div.setAttribute("class", "flex flex-col place-content-center justify-center px-6");
    outside_div.setAttribute("name", "clss-s-" + no_of_class);
    outside_div.setAttribute("id", "class-" + no_of_class);

    var inside_div = document.createElement("div");
    inside_div.setAttribute("class", "flex justify-center");

    var clss = document.createElement("div");
    clss.setAttribute("class", "w-96 justify-self-center place-self-center rounded border-solid bg-slate-200 shadow-md")

    var title = document.createElement("h3");
    title.innerHTML = "child class";
    title.setAttribute("class", "text-gray-900 text-center text-3xl font-bold p-4")

    var parent_div = document.createElement("div");
    parent_div.setAttribute("class", "flex flex-col mb-4 w-48 float-left p-2");

    var parent_label = document.createElement("label");
    parent_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    parent_label.setAttribute("for", "parent");
    parent_label.innerHTML = "parent class";

    var parent = document.createElement("input");
    parent.setAttribute("type", "text");
    //parent.setAttribute("name", "parent");
    parent.setAttribute("name", "parent-" + no_of_class);
    parent.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    parent_div.append(parent_label);
    parent_div.append(parent);

    var id_div = document.createElement("div");
    id_div.setAttribute("class", "flex flex-col mb-4 w-48 float-right p-2");

    var id_label = document.createElement("label");
    id_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    id_label.setAttribute("for", "id");
    id_label.innerHTML = "class id";

    var id = document.createElement("input");
    id.setAttribute("type", "text");
    //id.setAttribute("name", "id");
    id.setAttribute("name", "id-" + no_of_class);
    id.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    id_div.append(id_label);
    id_div.append(id);

    var rate_div = document.createElement("div");
    rate_div.setAttribute("class", "flex flex-col mb-4 w-48 float-left p-2");

    var rate_label = document.createElement("label");
    rate_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    rate_label.setAttribute("for", "rate");
    rate_label.innerHTML = "rate";

    var rate = document.createElement("input");
    rate.setAttribute("type", "text");
    //rate.setAttribute("name", "rate");
    rate.setAttribute("name", "rate-" + no_of_class);
    rate.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    rate_div.append(rate_label);
    rate_div.append(rate);

    var ceiling_div = document.createElement("div");
    ceiling_div.setAttribute("class", "flex flex-col mb-4 w-48 float-right p-2");

    var ceiling_label = document.createElement("label");
    ceiling_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    ceiling_label.setAttribute("for", "ceiling");
    ceiling_label.innerHTML = "ceiling";

    var ceiling = document.createElement("input");
    ceiling.setAttribute("type", "text");
    //ceiling.setAttribute("name", "ceiling");
    ceiling.setAttribute("name", "ceiling-" + no_of_class);
    ceiling.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    ceiling_div.append(ceiling_label);
    ceiling_div.append(ceiling);

    var btn_div = document.createElement("div");
    btn_div.setAttribute("class", "flex flex-col w-48 float-left p-4");

    var btn = document.createElement("button");
    btn.setAttribute("class", "hover:bg-blue-700 hover:shadow-lg hover:cursor-pointer inline-block bg-blue-200 text-white font-medium uppercase shadow-md rounded active:bg-blue-900 active:shadow-xl active:cursor-progress transition duration-100 p-4 flex-col items-center");
    btn.setAttribute("onclick", "add_subclass(this.name)");
    btn.setAttribute("name", "class-" + no_of_class);
    btn.innerHTML = "Add class";

    btn_div.append(btn);

    var fltr_div = document.createElement("div");
    fltr_div.setAttribute("class", "flex flex-col w-48 float-right p-4");

    var fltr = document.createElement("button");
    fltr.setAttribute("class", "hover:bg-blue-700 hover:shadow-lg hover:cursor-pointer inline-block bg-blue-200 text-white font-medium uppercase shadow-md rounded active:bg-blue-900 active:shadow-xl active:cursor-progress transition duration-100 p-4 flex-col items-center");
    fltr.setAttribute("onclick", "add_filter(this.name)");
    fltr.setAttribute("id", "fltr_btn");
    fltr.setAttribute("name", "class-" + no_of_class);
    fltr.innerHTML = "Add filter";

    fltr_div.append(fltr);

    var class_space = document.createElement("div");
    class_space.setAttribute("class", "flex flex-nowrap justify-center py-6");
    class_space.setAttribute("id", "space-class-" + no_of_class);

    clss.append(title);
    clss.append(parent_div);
    clss.append(id_div);
    clss.append(rate_div);
    clss.append(ceiling_div);
    clss.append(btn_div);
    clss.append(fltr_div);


    inside_div.append(clss);
    outside_div.append(inside_div);
    outside_div.append(class_space);

    var columns = document.getElementById("underroot");
    columns.appendChild(outside_div);
    no_of_class = no_of_class + 1;

}

function add_subfilter(div_name) {
    var elems = document.getElementsByName(div_name)

    elems.forEach((elem) => {
        elem.disabled = true;
        elem.setAttribute("class", "bg-red-100 cursor-not-allowed inline-block font-medium uppercase shadow-md rounded p-4 flex-col items-center");
    })

    var outside_div = document.createElement("div");
    outside_div.setAttribute("name", "filter-" + no_of_class);
    outside_div.setAttribute("class", "flex flex-inital justify-center py-6");

    var fltr = document.createElement("div");
    fltr.setAttribute("class", "w-96 justify-center rounded border-solid bg-slate-200 shadow-md")

    var title = document.createElement("h3");
    title.innerHTML = "filter";
    title.setAttribute("class", "text-gray-900 text-center text-3xl font-bold p-4")

    var prio_div = document.createElement("div");
    prio_div.setAttribute("class", "flex flex-col mb-4 w-48 float-left p-2");

    var prio_label = document.createElement("label");
    prio_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    prio_label.setAttribute("for", "prio");
    prio_label.innerHTML = "priority";

    var prio = document.createElement("input");
    prio.setAttribute("type", "text");
    prio.setAttribute("name", "prio"+no_of_filter);
    prio.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    prio_div.append(prio_label);
    prio_div.append(prio);

    var ip_div = document.createElement("div");
    ip_div.setAttribute("class", "flex flex-col mb-4 w-48 float-right p-2");

    var ip_label = document.createElement("label");
    ip_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    ip_label.setAttribute("for", "ip");
    ip_label.innerHTML = "destination ip";

    var ip = document.createElement("input");
    ip.setAttribute("type", "text");
    ip.setAttribute("name", "ip"+no_of_filter);
    ip.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    ip_div.append(ip_label);
    ip_div.append(ip);

    var dport_div = document.createElement("div");
    dport_div.setAttribute("class", "flex flex-col mb-4 w-48 float-left p-2");

    var dport_label = document.createElement("label");
    dport_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    dport_label.setAttribute("for", "dport");
    dport_label.innerHTML = "eagress port";

    var dport = document.createElement("input");
    dport.setAttribute("type", "text");
    dport.setAttribute("name", "dport"+no_of_filter);
    dport.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    dport_div.append(dport_label);
    dport_div.append(dport);

    var flowid_div = document.createElement("div");
    flowid_div.setAttribute("class", "flex flex-col mb-4 w-48 float-right p-2");

    var flowid_label = document.createElement("label");
    flowid_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    flowid_label.setAttribute("for", "flowid");
    flowid_label.innerHTML = "class id";

    var flowid = document.createElement("input");
    flowid.setAttribute("type", "text");
    flowid.setAttribute("name", "flowid" + no_of_filter);
    flowid.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    flowid_div.append(flowid_label);
    flowid_div.append(flowid);


    fltr.append(title);
    fltr.append(prio_div);
    fltr.append(ip_div);
    fltr.append(dport_div);
    fltr.append(flowid_div);

    outside_div.append(fltr);

    var columns = document.getElementById("filter-" + div_name);
    columns.appendChild(outside_div);

}

function add_subclass(div_name) {
    document.getElementsByName(div_name)[1].disabled = true;
    document.getElementsByName(div_name)[1].setAttribute("class", "bg-red-100 cursor-not-allowed inline-block font-medium uppercase shadow-md rounded p-4 flex-col items-center");
    document.getElementById(div_name).setAttribute("name", "clss-" + no_of_class);

    var outside_div = document.createElement("div");
    outside_div.setAttribute("class", "flex flex-col justify-center py-6");
    outside_div.setAttribute("name", "clss-s-" + no_of_class);
    outside_div.setAttribute("id", "class-" + no_of_class);

    var clss = document.createElement("div");
    clss.setAttribute("class", "w-96 justify-self-auto rounded border-solid bg-slate-200 shadow-md")

    var title = document.createElement("h3");
    title.innerHTML = "child class";
    title.setAttribute("class", "text-gray-900 text-center text-3xl font-bold p-4")

    var parent_div = document.createElement("div");
    parent_div.setAttribute("class", "flex flex-col mb-4 w-48 float-left p-2");

    var parent_label = document.createElement("label");
    parent_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    parent_label.setAttribute("for", "parent");
    parent_label.innerHTML = "parent class";

    var parent = document.createElement("input");
    parent.setAttribute("type", "text");
    parent.setAttribute("name", "parent-" + no_of_class);
    parent.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    parent_div.append(parent_label);
    parent_div.append(parent);

    var id_div = document.createElement("div");
    id_div.setAttribute("class", "flex flex-col mb-4 w-48 float-right p-2");

    var id_label = document.createElement("label");
    id_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    id_label.setAttribute("for", "id");
    id_label.innerHTML = "class id";

    var id = document.createElement("input");
    id.setAttribute("type", "text");
    id.setAttribute("name", "id-" + no_of_class);
    id.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    id_div.append(id_label);
    id_div.append(id);

    var rate_div = document.createElement("div");
    rate_div.setAttribute("class", "flex flex-col mb-4 w-48 float-left p-2");

    var rate_label = document.createElement("label");
    rate_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    rate_label.setAttribute("for", "rate");
    rate_label.innerHTML = "rate";

    var rate = document.createElement("input");
    rate.setAttribute("type", "text");
    rate.setAttribute("name", "rate-" + no_of_class);
    rate.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    rate_div.append(rate_label);
    rate_div.append(rate);

    var ceiling_div = document.createElement("div");
    ceiling_div.setAttribute("class", "flex flex-col mb-4 w-48 float-right p-2");

    var ceiling_label = document.createElement("label");
    ceiling_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    ceiling_label.setAttribute("for", "ceiling");
    ceiling_label.innerHTML = "ceiling";

    var ceiling = document.createElement("input");
    ceiling.setAttribute("type", "text");
    ceiling.setAttribute("name", "ceiling-" + no_of_class);
    ceiling.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    ceiling_div.append(ceiling_label);
    ceiling_div.append(ceiling);

    // var btn_div = document.createElement("div");
    // btn_div.setAttribute("class", "flex flex-col w-48 float-left p-4");

    // var btn = document.createElement("button");
    // btn.setAttribute("class", "hover:bg-blue-700 hover:shadow-lg hover:cursor-pointer inline-block bg-blue-200 text-white font-medium uppercase shadow-md rounded active:bg-blue-900 active:shadow-xl active:cursor-progress transition duration-100 p-4 flex-col items-center");
    // btn.setAttribute("onclick", "add_class()");
    // btn.setAttribute("name", "class-" + no_of_class);
    // btn.innerHTML = "Add class";

    // btn_div.append(btn);

    var fltr_div = document.createElement("div");
    fltr_div.setAttribute("class", "flex flex-row justify-center w-48 float-right p-4");

    var fltr = document.createElement("button");
    fltr.setAttribute("class", "hover:bg-blue-700 hover:shadow-lg hover:cursor-pointer inline-block bg-blue-200 text-white font-medium uppercase shadow-md rounded active:bg-blue-900 active:shadow-xl active:cursor-progress transition duration-100 p-4 flex-col items-center");
    fltr.setAttribute("onclick", "add_subfilter(this.name)");
    fltr.setAttribute("id", "fltr_btn");
    fltr.setAttribute("name", "class-" + no_of_class);
    fltr.innerHTML = "Add filter";

    fltr_div.append(fltr);

    var filter_space = document.createElement("div");
    filter_space.setAttribute("class", "flex flex-nowrap justify-center py-6");
    filter_space.setAttribute("id", "filter-class-" + no_of_class);

    clss.append(title);
    clss.append(parent_div);
    clss.append(id_div);
    clss.append(rate_div);
    clss.append(ceiling_div);
    // clss.append(btn_div);
    clss.append(fltr_div);

    outside_div.append(clss);
    outside_div.append(filter_space);

    var columns = document.getElementById("space-" + div_name);
    columns.appendChild(outside_div);
    no_of_class = no_of_class + 1;

}

function add_filter(div_name) {
    var elems = document.getElementsByName(div_name)

    elems.forEach((elem) => {
        elem.disabled = true;
        elem.setAttribute("class", "bg-red-500 cursor-not-allowed inline-block font-medium uppercase shadow-md rounded p-4 flex-col items-center");
    })

    var outside_div = document.createElement("div");
    outside_div.setAttribute("name", "filter-" + no_of_class);
    outside_div.setAttribute("class", "flex flex-inital justify-center py-6");

    var fltr = document.createElement("div");
    fltr.setAttribute("class", "w-96 justify-center rounded border-solid bg-slate-200 shadow-md")

    var title = document.createElement("h3");
    title.innerHTML = "filter";
    title.setAttribute("class", "text-gray-900 text-center text-3xl font-bold p-4")

    var prio_div = document.createElement("div");
    prio_div.setAttribute("class", "flex flex-col mb-4 w-48 float-left p-2");

    var prio_label = document.createElement("label");
    prio_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    prio_label.setAttribute("for", "prio");
    prio_label.innerHTML = "priority";

    var prio = document.createElement("input");
    prio.setAttribute("type", "text");
    prio.setAttribute("name", "prio");
    prio.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    prio_div.append(prio_label);
    prio_div.append(prio);

    var ip_div = document.createElement("div");
    ip_div.setAttribute("class", "flex flex-col mb-4 w-48 float-right p-2");

    var ip_label = document.createElement("label");
    ip_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    ip_label.setAttribute("for", "ip");
    ip_label.innerHTML = "destination ip";

    var ip = document.createElement("input");
    ip.setAttribute("type", "text");
    ip.setAttribute("name", "ip");
    ip.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    ip_div.append(ip_label);
    ip_div.append(ip);

    var dport_div = document.createElement("div");
    dport_div.setAttribute("class", "flex flex-col mb-4 w-48 float-left p-2");

    var dport_label = document.createElement("label");
    dport_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    dport_label.setAttribute("for", "dport");
    dport_label.innerHTML = "eagress port";

    var dport = document.createElement("input");
    dport.setAttribute("type", "text");
    dport.setAttribute("name", "dport");
    dport.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    dport_div.append(dport_label);
    dport_div.append(dport);

    var flowid_div = document.createElement("div");
    flowid_div.setAttribute("class", "flex flex-col mb-4 w-48 float-right p-2");

    var flowid_label = document.createElement("label");
    flowid_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    flowid_label.setAttribute("for", "flowid");
    flowid_label.innerHTML = "class id";

    var flowid = document.createElement("input");
    flowid.setAttribute("type", "text");
    flowid.setAttribute("name", "flowid");
    flowid.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    flowid_div.append(flowid_label);
    flowid_div.append(flowid);


    fltr.append(title);
    fltr.append(prio_div);
    fltr.append(ip_div);
    fltr.append(dport_div);
    fltr.append(flowid_div);

    outside_div.append(fltr);

    var columns = document.getElementById("space-" + div_name);
    columns.appendChild(outside_div);
}