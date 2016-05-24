
console.log("sono finito dentro luminosita.js");
var casellaLuminosita = document.getElementById("luminosita");
caricaLuminosita(casellaLuminosita);


function caricaLuminosita(cella) {
    console.log("caricamento luminosita in corso...");
    firebase.database().ref("luci").once("value").then(function (snapshot) {
        console.log("sono dentro il caricamento della luminosita");
        console.log("luminosita: "+snapshot.val().luminosita);
        cella.value= snapshot.val().luminosita;
    });
}