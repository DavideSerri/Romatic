
//funzione per l'output della luminosità del nostro fotosensore
function caricaLuminosita() {
    var casellaLuminosita = document.getElementById("luminosita"); //caching del posto dove vado a inserire l'output 
    firebase.database().ref("luci").once("value").then(function (snapshot) {
        casellaLuminosita.innerHTML ="Luminosit&agrave;: "+ snapshot.val().luminosita; //inserimento del valore della luminosità       
    });
}
function outputSogliaMinimaAttuale() {
    var casellaSoglia = document.getElementById("sogliaMinimaAttuale");
    var outputControlloSoglia = document.getElementById("controlloSoglia");
    firebase.database().ref("luci").once("value").then(function (snapshot) {
        casellaSoglia.innerHTML = "Lum. minima: " + snapshot.val().sogliaMinima+"<span>"+
		"<button type='button' class='btn btn-success' id='cambioSogliaMinima' onclick='cambioSogliaMinima()'>Modifica</button>"+"</span>";
        if (snapshot.val().interruttore == false){
            outputControlloSoglia.innerHTML = " Luminosit&agrave; : interruttore spento";
        } else if(snapshot.val().sogliaMinima <= snapshot.val().luminosita) {
            outputControlloSoglia.innerHTML = " Luminosit&agrave; : Sufficiente";
        }else {
            outputControlloSoglia.innerHTML = " Luminosit&agrave; : Bassa";
        }
    });
}

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

