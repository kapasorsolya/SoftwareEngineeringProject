
    function check_dd() {
       if (document.getElementById("igen").checked) {
        document.getElementById("hol").style.display = "initial";
        document.getElementById("szak").style.display = "initial";

            } 
}
function check_itthon() {
    if (document.getElementById("itthon").checked) {
        document.getElementById('egyetem').style.display = "initial";
    }
}
function check_kuldes() {

    if (!document.getElementById("ferfi").checked && !document.getElementById("no").checked && !document.getElementById("egyeb").checked)
        alert("Toltse ki a 'Mi a nemed?' mezot!");
    if (!document.getElementById("maros").checked && !document.getElementById("hargita").checked && !document.getElementById("kovaszna").checked)
        alert("Toltse ki a 'Hol laksz?' mezot!");
    if (!document.getElementById("igen").checked && !document.getElementById("nem").checked)
        alert("Toltse ki a 'Szeretnél tovább tanulni?' mezot!");


}
       