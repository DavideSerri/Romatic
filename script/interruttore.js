/*
-Questo script gestisce gli interruttori
*/
function outputAccensione() {
    var bottoneLuce = document.getElementById("interruttore");
    var bottonePompa = document.getElementById("motore");
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/luci").once("value").then(function (snapshot) {
       
        if (snapshot.val().interruttore) {
            bottoneLuce.checked=true;
        } else {
            bottoneLuce.checked=false;
        }
    });
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/serbatoio").once("value").then(function (snapshot) {
        
        if (snapshot.val().motore) {
            
            bottonePompa.checked = true;
        } else {
            bottonePompa.checked = false;
        }
    });
}
var bottoneLuce = document.getElementById("interruttore");
    bottoneLuce.addEventListener("click", cambioInterruttore, false);
    var bottonePompa = document.getElementById("motore");
    bottonePompa.addEventListener("click", cambioMotore, false);
function cambioInterruttore() {
    cambio = {};
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/luci").once("value").then(function (snapshot) { 
    if (snapshot.val().interruttore) {
        
        cambio["interruttore"] = false;
        firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/luci").update(cambio);
    } else {       
        cambio["interruttore"] = true;    
        firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/luci").update(cambio);
    } 
    outputAccensione();
    });
}
function cambioMotore() {
    cambio = {};
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/serbatoio").once("value").then(function (snapshot) {
        if (snapshot.val().motore) {

            cambio["motore"] = false;
            firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/serbatoio").update(cambio);
        } else {
            cambio["motore"] = true;
            firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/serbatoio").update(cambio);
        }
        outputAccensione();
    });
}