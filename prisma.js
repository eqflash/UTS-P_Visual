var luas;
var alas;
var tinggi;
var panjang;
var volume;
var tinggiPrisma;
function hitung() {
 alas = parseFloat(document.getElementById("ipt_a").value);
 tinggi = parseFloat(document.getElementById("ipt_t").value);
 tinggiPrisma = parseFloat(document.getElementById("ipt_tp").value);
 luas = 1/2 * alas * tinggi;
 volume = luas * tinggiPrisma;
 document.getElementById('opt_volume').value = volume;
}