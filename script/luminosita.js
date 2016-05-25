
//funzione per l'output della luminosità del nostro fotosensore
function caricaLuminosita() {
    var casellaLuminosita = document.getElementById("luminosita"); //caching del posto dove vado a inserire l'output 
    firebase.database().ref("luci").once("value").then(function (snapshot) {
        casellaLuminosita.innerHTML ="luminosit&agrave;: "+ snapshot.val().luminosita; //inserimento del valore della luminosità       
    });
}
function outputSogliaMinimaAttuale() {
    var casellaSoglia = document.getElementById("sogliaMinimaAttuale");
    var outputControlloSoglia = document.getElementById("controlloSoglia");
    firebase.database().ref("luci").once("value").then(function (snapshot) {
        casellaSoglia.innerHTML = "Soglia luminosit&agrave; minima attuale: " + snapshot.val().sogliaMinima;
        if (snapshot.val().interruttore == false){
            outputControlloSoglia.innerHTML = " Luminosit&agrave; : interruttore spento :C";
        } else if(snapshot.val().sogliaMinima <= snapshot.val().luminosita) {
            outputControlloSoglia.innerHTML = " Luminosit&agrave; : Ok :)";
        }else {
            outputControlloSoglia.innerHTML = " Luminosit&agrave; : Bassa :C";
        }
    });
}
var bottoneModificaSogliaMinima = document.getElementById("cambioSogliaMinima");
bottoneModificaSogliaMinima.addEventListener("click", cambioSogliaMinima, false);

function cambioSogliaMinima() {
    var valore="";
    while (isNaN(parseInt(valore))) {
            console.log("valore preso in input" + parseInt(valore));

            valore =  prompt("Valore della nuova soglia minima: ");
    }
    var casellaSoglia = document.getElementById("sogliaMinimaAttuale");
    var aggiornamentoSogliaMinima = {};
    aggiornamentoSogliaMinima["sogliaMinima"] = parseInt(valore);
    firebase.database().ref("luci").update(aggiornamentoSogliaMinima);
 }

