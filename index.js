

//COLLEGAMENTO FIREBASE
var config = {
    apiKey: "AIzaSyCrShxGQFW1DoVeupCCLvOoEA10a7jJ-9s",
    authDomain: "blinding-inferno-1936.firebaseapp.com",
    databaseURL: "https://blinding-inferno-1936.firebaseio.com",
    storageBucket: "blinding-inferno-1936.appspot.com",
};
firebase.initializeApp(config);
var interruttore = document.getElementById("interruttore");
    interruttore.addEventListener("click", accensione, false);

function accensione() {
    var visualizzaInterruttore = document.getElementById("visualizzaInterruttore");
    if (visualizzaInterruttore.innerHTML == "Luci Spente") {
        visualizzaInterruttore.innerHTML = "Luci Accese";
    } else {
        visualizzaInterruttore.innerHTML="Luci Spente"
    }
	
	
}