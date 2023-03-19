function Weather() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText) {
                document.getElementById("weather").innerHTML = this.responseText;
            }
        }
    };
    var a = document.getElementById("weatherCity").value;
    console.log('a : ', a)
    var temp = "https://wttr.in/" + a;
    xhttp.open("GET", temp, true);
    xhttp.send();
}
function myFunction() {
    var gr = document.getElementById("gold_rate").value;
    var gw = document.getElementById("gold_weight").value;
    var gp = document.getElementById("gold_percentage").value;
    var gst = document.getElementById("gst_percentage").value;
    var gold_cost_alone = parseFloat(gr * gw).toFixed(2);
    document.getElementById("gold_cost_alone").value = gold_cost_alone;
    document.getElementById("gold_cost_alone").innerHTML = gold_cost_alone;
    var gold_percentage_cost_alone = parseFloat((gold_cost_alone * gp) / 100).toFixed(2);
    document.getElementById("gold_percentage_cost_alone").value = gold_percentage_cost_alone;
    var gold_total_cost = parseFloat(gold_cost_alone) + parseFloat(gold_percentage_cost_alone);
    document.getElementById("gold_total_cost").value = parseFloat(gold_total_cost).toFixed(2);
    var gst_cost = parseFloat(gold_total_cost * (gst / 100)).toFixed(2);
    document.getElementById("gst_cost").value = gst_cost;
    var total = parseFloat(gold_total_cost) + parseFloat(gst_cost);
    total = parseFloat(total).toFixed(2);
    document.getElementById("gold_jewel_total").value = total;
    getFormTable(gr, gw, gp, gst, gold_cost_alone, gold_percentage_cost_alone, gst_cost, total);
}
function getFormTable(gr, gw, gp, gst, gold_cost_alone, gold_percentage_cost_alone, gst_cost, total) {
    var table = document.getElementById("table");
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");
    var cell5 = document.createElement("td");
    var cell6 = document.createElement("td");
    var cell7 = document.createElement("td");
    var cell8 = document.createElement("td");
    var cell9 = document.createElement("td");
    cell1.innerHTML = document.getElementsByTagName('tr').length;
    cell2.innerHTML = gr;
    cell3.innerHTML = gw;
    cell4.innerHTML = gold_cost_alone;
    cell5.innerHTML = gp;
    cell6.innerHTML = gold_percentage_cost_alone;
    cell7.innerHTML = gst;
    cell8.innerHTML = gst_cost;
    cell9.innerHTML = total;
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    row.appendChild(cell5);
    row.appendChild(cell6);
    row.appendChild(cell7);
    row.appendChild(cell8);
    row.appendChild(cell9);
    table.appendChild(row);
}
function goldCalc() {
    sessionStorage.setItem('gold', true);
    window.location.assign("blog.html#gold");
}
function getHide() {
    if (sessionStorage.getItem("gold")) {
        var container = document.getElementById("journey");
        if (container) {
            container.style.display = "none";
            sessionStorage.removeItem("gold");
        }
    } else {
        var container = document.getElementById("gold");
        if (container) {
            container.style.display = "none";
            sessionStorage.removeItem("journey");
        }
    }
}
function journey() {
    sessionStorage.setItem('blog', true);
    window.location.assign("blog.html#journey");
}
