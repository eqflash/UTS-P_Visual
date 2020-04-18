var luas;
var alas;
var tinggi;
var panjang;
var volume;
var r;
var phi;
function hitung() {
 r = parseFloat(document.getElementById("ipt_r").value);
 tinggi = parseFloat(document.getElementById("ipt_t").value);
 phi = 3.14;
 volume = 1/3 * phi * r * r * tinggi;
 document.getElementById('opt_volume').value = volume;
}