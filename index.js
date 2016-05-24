
//COLLEGAMENTO FIREBASE
var config = {
    apiKey: "AIzaSyCdegHgPn2Uklg8DuDRt1JPP1rvdvzy3sM",
    authDomain: "aromatic-5cf2a.firebaseapp.com",
    databaseURL: "https://aromatic-5cf2a.firebaseio.com",
    storageBucket: "aromatic-5cf2a.appspot.com",
};

firebase.initializeApp(config);
//FINE COLLEGAMENTO AL DATABASE
//Controllo interruttore luce

var valoreInterruttore;

firebase.database().ref("luci").once("value").then(function (snapshot) {
    valoreInterruttore = snapshot.val().interruttore;

});
outputAccensione();

var interruttore = document.getElementById("interruttore");
interruttore.addEventListener("click", accensione, false);

function outputAccensione() {
    console.log("valoreaccensione Attivato");
    var visualizzaInterruttore = document.getElementById("visualizzaInterruttore");
    if (valoreInterruttore == false) {
        visualizzaInterruttore.innerHTML = "Luci Spente";
    } else {
        visualizzaInterruttore.innerHTML = "Luci Accese";
    }
}
function accensione() {
    console.log("bottone cliccato")
    if (valoreInterruttore == false) {
        console.log("valore false");
        firebase.database().ref("luci").set({
            interruttore: true
        });
        outputAccensione();
    } else {
        console.log("valore true");
        firebase.database().ref("luci").set({
            interruttore: false
        });
        outputAccensione();
    }


}