
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

/*firebase.database().ref("luci").once("value").then(function (snapshot) {
    setValoreInterruttore(snapshot.val().interruttore);
    
});*/
outputAccensione();

var interruttore = document.getElementById("interruttore");
interruttore.addEventListener("click", accensione, false);

function getValoreInterruttore() {
    return valoreInterruttore;
}
function setValoreInterruttore(valore) {
    valoreInterruttore = valore;
    console.log("val(dentro la funzione) " + valoreInterruttore);
}
function outputAccensione() {
    
    var visualizzaInterruttore = document.getElementById("visualizzaInterruttore");

    firebase.database().ref("luci").once("value").then(function (snapshot) {
        setValoreInterruttore(snapshot.val().interruttore);
        if (snapshot.val().interruttore === false) {
            console.log("valore accensione: false");
            visualizzaInterruttore.innerHTML = "Luci Spente";
        } else {
            console.log("valore accensione: true");
            visualizzaInterruttore.innerHTML = "Luci Accese";
        }

    });
 /*   if (getValoreInterruttore == false) {
        console.log("valore accensione: false");
        visualizzaInterruttore.innerHTML = "Luci Spente";
    } else {
        console.log("valore accensione: true");
        visualizzaInterruttore.innerHTML = "Luci Accese";
    }*/
}
function accensione() {
    
    var aggiornamenti = {}
    

    if (valoreInterruttore == false) {

        console.log("valore interruttore: false");
     
       aggiornamenti['interruttore'] = true;
       firebase.database().ref("luci").update(aggiornamenti);
     
        outputAccensione();
    } else {
        console.log("valore interruttore: true");

       aggiornamenti['interruttore'] = false;
       firebase.database().ref("luci").update(aggiornamenti);
        outputAccensione();
    }


}