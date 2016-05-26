
//Output dell'ora e minuti correnti
function outputOraCorrente() {
    var ora = new Date();
    var output = document.getElementById("oraCorrente");
    output.innerHTML ="Ora Attuale: "+ ora.getHours()+"h" + ora.getMinutes()+"m";
}
function outputOraAccensione() {
    var casellaOraInizio = document.getElementById("oraInizio");
    firebase.database().ref("luci").once("value").then(function (snapshot) {
        casellaOraInizio.selectedIndex=snapshot.val().oraInizio-1; //output ora di inizio accensione       
    });
};
function outputOraSpegnimento() {
    var casellaOraFine = document.getElementById("oraSpegnimento");
    firebase.database().ref("luci").once("value").then(function (snapshot) {
        casellaOraFine.selectedIndex = snapshot.val().oraFine - 1; //output ora di inizio accensione       
    });
}
//Aggiunta dell'evento "onChange" dei due select Index dell'orario con aggiornamento del server
var casellaOraInizioOnChange = document.getElementById("oraInizio");
casellaOraInizioOnChange.addEventListener("change", cambioOraInizio, false);
var casellaOraFineOnChange = document.getElementById("oraSpegnimento");
casellaOraFineOnChange.addEventListener("change", cambioOraFine, false);

function cambioOraInizio() {
    console.log("sono entrato nel cambio ora da utente");
     
    var aggiornamentoOrarioInizio = {}       
        aggiornamentoOrarioInizio['oraInizio'] = casellaOraInizioOnChange.selectedIndex+1;
        firebase.database().ref("luci").update(aggiornamentoOrarioInizio);

}
function cambioOraFine() {
    console.log("sono entrato nel cambio d'orario di fine da utente");

    var aggiornamentoOrarioFine = {}
    aggiornamentoOrarioFine['oraFine'] = casellaOraFineOnChange.selectedIndex + 1;
    firebase.database().ref("luci").update(aggiornamentoOrarioFine);
}
