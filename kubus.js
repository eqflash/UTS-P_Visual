var luas;
var keliling;
var alas;
var tinggi;
var sisiMiring;
var sisi;
var luasKubus
function hitung() {
 sisi = parseFloat(document.getElementById("ipt_sisi").value);
 
 luas = sisi * sisi;
 luasKubus = 6 * luas;
 
 document.getElementById('opt_luasKubus').value = luasKubus;
}