no_of_class = 1;
function add_class() {
    var outside_div = document.createElement("div");
    outside_div.setAttribute("class", "w-1/5 flex flex-inital justify-center px-6");
    outside_div.setAttribute("name", "class-" + no_of_class);

    var clss = document.createElement("div");
    clss.setAttribute("class", "justify-center rounded border-solid bg-slate-200 shadow-md")

    var title = document.createElement("h3");
    title.innerHTML = "child class";
    title.setAttribute("class", "text-gray-900 text-center text-3xl font-bold p-4")

    var parent_div = document.createElement("div");
    parent_div.setAttribute("class", "flex flex-col mb-4 md:w-1/2 float-left p-2");

    var parent_label = document.createElement("label");
    parent_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    parent_label.setAttribute("for", "parent");
    parent_label.innerHTML = "parent class";

    var parent = document.createElement("input");
    parent.setAttribute("type", "text");
    parent.setAttribute("name", "parent");
    parent.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    parent_div.append(parent_label);
    parent_div.append(parent);

    var id_div = document.createElement("div");
    id_div.setAttribute("class", "flex flex-col mb-4 md:w-1/2 float-right p-2");

    var id_label = document.createElement("label");
    id_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    id_label.setAttribute("for", "id");
    id_label.innerHTML = "class id";

    var id = document.createElement("input");
    id.setAttribute("type", "text");
    id.setAttribute("name", "id");
    id.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    id_div.append(id_label);
    id_div.append(id);

    var rate_div = document.createElement("div");
    rate_div.setAttribute("class", "flex flex-col mb-4 md:w-1/2 float-left p-2");

    var rate_label = document.createElement("label");
    rate_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    rate_label.setAttribute("for", "rate");
    rate_label.innerHTML = "rate";

    var rate = document.createElement("input");
    rate.setAttribute("type", "text");
    rate.setAttribute("name", "rate");
    rate.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    rate_div.append(rate_label);
    rate_div.append(rate);

    var ceiling_div = document.createElement("div");
    ceiling_div.setAttribute("class", "flex flex-col mb-4 md:w-1/2 float-right p-2");

    var ceiling_label = document.createElement("label");
    ceiling_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    ceiling_label.setAttribute("for", "ceiling");
    ceiling_label.innerHTML = "ceiling";

    var ceiling = document.createElement("input");
    ceiling.setAttribute("type", "text");
    ceiling.setAttribute("name", "ceiling");
    ceiling.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    ceiling_div.append(ceiling_label);
    ceiling_div.append(ceiling);

    var btn_div = document.createElement("div");
    btn_div.setAttribute("class", "flex flex-col md:w-1/2 float-left p-4");

    var btn = document.createElement("button");
    btn.setAttribute("class", "hover:bg-blue-700 hover:shadow-lg hover:cursor-pointer inline-block bg-blue-200 text-white font-medium uppercase shadow-md rounded active:bg-blue-900 active:shadow-xl active:cursor-progress transition duration-100 p-4 flex-col items-center");
    btn.setAttribute("onclick", "add_class()");
    btn.innerHTML = "Add class";

    btn_div.append(btn);

    var fltr_div = document.createElement("div");
    fltr_div.setAttribute("class", "flex flex-col md:w-1/2 float-right p-4");

    var fltr = document.createElement("button");
    fltr.setAttribute("class", "hover:bg-blue-700 hover:shadow-lg hover:cursor-pointer inline-block bg-blue-200 text-white font-medium uppercase shadow-md rounded active:bg-blue-900 active:shadow-xl active:cursor-progress transition duration-100 p-4 flex-col items-center");
    fltr.setAttribute("onclick", "add_filter()");
    fltr.innerHTML = "Add filter";

    fltr_div.append(fltr);

    clss.append(title);
    clss.append(parent_div);
    clss.append(id_div);
    clss.append(rate_div);
    clss.append(ceiling_div);
    clss.append(btn_div);
    clss.append(fltr_div);

    outside_div.append(clss);

    var columns = document.getElementById("underroot");
    columns.appendChild(outside_div);

}

function get_name() {
    
}

function add_filter() {
    var outside_div = document.createElement("div");
    outside_div.setAttribute("class", "w-1/5 flex flex-inital justify-center px-6");

    var fltr = document.createElement("div");
    fltr.setAttribute("class", "justify-center rounded border-solid bg-slate-200 shadow-md")

    var title = document.createElement("h3");
    title.innerHTML = "filter";
    title.setAttribute("class", "text-gray-900 text-center text-3xl font-bold p-4")

    var prio_div = document.createElement("div");
    prio_div.setAttribute("class", "flex flex-col mb-4 md:w-1/2 float-left p-2");

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
    ip_div.setAttribute("class", "flex flex-col mb-4 md:w-1/2 float-right p-2");

    var ip_label = document.createElement("label");
    ip_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    ip_label.setAttribute("for", "ip");
    ip_label.innerHTML = "source ip";

    var ip = document.createElement("input");
    ip.setAttribute("type", "text");
    ip.setAttribute("name", "ip");
    ip.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    ip_div.append(ip_label);
    ip_div.append(ip);

    var dport_div = document.createElement("div");
    dport_div.setAttribute("class", "flex flex-col mb-4 md:w-1/2 float-left p-2");

    var dport_label = document.createElement("label");
    dport_label.setAttribute("class", "mb-2 font-bold tracking-wide uppercase text-gray-800");
    dport_label.setAttribute("for", "dport");
    dport_label.innerHTML = "ingress port";

    var dport = document.createElement("input");
    dport.setAttribute("type", "text");
    dport.setAttribute("name", "dport");
    dport.setAttribute("class", "border py-2 px-3 text-black md:mr-2")

    dport_div.append(dport_label);
    dport_div.append(dport);

    var flowid_div = document.createElement("div");
    flowid_div.setAttribute("class", "flex flex-col mb-4 md:w-1/2 float-right p-2");

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

    var columns = document.getElementsByTagName(name_of_class);
    columns.appendChild(outside_div);

}