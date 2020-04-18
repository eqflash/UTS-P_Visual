var luas;
var keliling;
var alas;
var tinggi;
var sisiMiring;
var r;
var phi;
function hitung() {
 r = parseFloat(document.getElementById("ipt_r").value);
 tinggi = parseFloat(document.getElementById("ipt_tinggi").value);
 phi = 3.14;
 luas = phi * r * r * tinggi;
 document.getElementById('opt_luas').value = luas;
}