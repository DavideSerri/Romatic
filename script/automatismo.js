/*
-Questo script gestisce l'output degli automatismi e i loro settaggi
*/
function outputAutomatismi() {
    var bottoneLuce = document.getElementById("luciAutomatiche");
    var bottonePompa = document.getElementById("pompaAutomatica");
	var bottoneLuce2 = document.getElementById("interruttore");
	var bottonePompa2 = document.getElementById("motore");
	var labelLuce = document.getElementById("label-interruttore");
	var labelPompa = document.getElementById("label-motore");
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/luci").once("value").then(function (snapshot) {
       
        if (snapshot.val().automatico) {
            bottoneLuce.checked=true;
			bottoneLuce2.disabled = true;
			labelLuce.addEventListener("click", allerta, false );
        } else {
            bottoneLuce.checked=false;
			labelLuce.removeEventListener("click", allerta, false );
			bottoneLuce2.disabled = false;
        }
    });
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/serbatoio").once("value").then(function (snapshot) {
        
        if (snapshot.val().automatico) {
            
            bottonePompa.checked = true;
			bottonePompa2.disabled = true;
			labelPompa.addEventListener("click", allerta, false );
        } else {
            bottonePompa.checked = false;
			labelPompa.removeEventListener("click", allerta, false );
			bottonePompa2.disabled = false;
        }
    });
}
var bottoneLuce = document.getElementById("luciAutomatiche");
    bottoneLuce.addEventListener("click", cambioAutomaticoLuce, false);
    var bottonePompa = document.getElementById("pompaAutomatica");
    bottonePompa.addEventListener("click", cambioAutomaticoPompa, false);
	
function allerta() {
	alert("azione non disponibile in modalita' automatica");	
}

	
function cambioAutomaticoLuce() {
    cambio = {};
	var bottoneLuce2 = document.getElementById("interruttore");
	var labelLuce = document.getElementById("label-interruttore");
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/luci").once("value").then(function (snapshot) { 
    if (snapshot.val().automatico) {
        
        cambio["automatico"] = false;
        firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/luci").update(cambio);
		labelLuce.removeEventListener("click", allerta, false );
		bottoneLuce2.disabled = false;
    } else {       
        cambio["automatico"] = true;    
        firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/luci").update(cambio);
		labelLuce.addEventListener("click", allerta , false );
		bottoneLuce2.disabled = true;
    } 
    outputAutomatismi();
    });
}
function cambioAutomaticoPompa() {
	var bottonePompa2 = document.getElementById("motore");
	var labelPompa = document.getElementById("label-motore");
    cambio = {};
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/serbatoio").once("value").then(function (snapshot) {
        if (snapshot.val().automatico) {

            cambio["automatico"] = false;
            firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/serbatoio").update(cambio);
			labelPompa.removeEventListener("click", allerta, false );
			bottonePompa2.disabled = false;
        } else {
            cambio["automatico"] = true;
            firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/serbatoio").update(cambio);
			labelPompa.addEventListener("click", allerta, false );
			bottonePompa2.disabled = true;
        }
        outputAutomatismi();
    });
}