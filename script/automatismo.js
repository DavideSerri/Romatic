function outputAutomatismi() {
    var bottoneLuce = document.getElementById("luciAutomatiche");
    var bottonePompa = document.getElementById("pompaAutomatica");
    firebase.database().ref("luci").once("value").then(function (snapshot) {
       
        if (snapshot.val().automatico) {
            bottoneLuce.checked=true;
        } else {
            bottoneLuce.checked=false;
        }
    });
    firebase.database().ref("serbatoio").once("value").then(function (snapshot) {
        
        if (snapshot.val().automatico) {
            
            bottonePompa.checked = true;
        } else {
            bottonePompa.checked = false;
        }
    });
}
var bottoneLuce = document.getElementById("luciAutomatiche");
    bottoneLuce.addEventListener("click", cambioAutomaticoLuce, false);
    var bottonePompa = document.getElementById("pompaAutomatica");
    bottonePompa.addEventListener("click", cambioAutomaticoPompa, false);
function cambioAutomaticoLuce() {
    cambio = {};
    firebase.database().ref("luci").once("value").then(function (snapshot) { 
    if (snapshot.val().automatico) {
        
        cambio["automatico"] = false;
        firebase.database().ref("luci").update(cambio);
    } else {       
        cambio["automatico"] = true;    
        firebase.database().ref("luci").update(cambio);
    } 
    outputAutomatismi();
    });
}
function cambioAutomaticoPompa() {
    cambio = {};
    firebase.database().ref("serbatoio").once("value").then(function (snapshot) {
        if (snapshot.val().automatico) {

            cambio["automatico"] = false;
            firebase.database().ref("serbatoio").update(cambio);
        } else {
            cambio["automatico"] = true;
            firebase.database().ref("serbatoio").update(cambio);
        }
        outputAutomatismi();
    });
}