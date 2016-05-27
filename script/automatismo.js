function outputAutomatismi() {
    var bottoneLuce = document.getElementById("luciAutomatiche");
    var bottonePompa = document.getElementById("pompaAutomatica");
	var bottoneLuce2 = document.getElementById("interruttore");
	var bottonePompa2 = document.getElementById("motore");
    firebase.database().ref("luci").once("value").then(function (snapshot) {
       
        if (snapshot.val().automatico) {
            bottoneLuce.checked=true;
			//bottoneLuce2.setAttribute("disabled", "true");
			bottoneLuce2.disabled = true;
			
        } else {
            bottoneLuce.checked=false;
			//bottoneLuce2.setAttribute("disabled", "false");
			bottoneLuce2.disabled = false;
        }
    });
    firebase.database().ref("serbatoio").once("value").then(function (snapshot) {
        
        if (snapshot.val().automatico) {
            
            bottonePompa.checked = true;
			//bottonePompa2.setAttribute("disabled", "true");
			bottonePompa2.disabled = true;
        } else {
            bottonePompa.checked = false;
			//bottonePompa2.setAttribute("disabled", "false");
			bottonePompa2.disabled = false;
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
		//bottoneLuce2.setAttribute("disabled", "false");
		bottoneLuce2.disabled = false;
    } else {       
        cambio["automatico"] = true;    
        firebase.database().ref("luci").update(cambio);
		//bottoneLuce2.setAttribute("disabled", "true");
		bottoneLuce2.disabled = true;
    } 
    outputAutomatismi();
    });
}
function cambioAutomaticoPompa() {
	var bottoneLuce2 = document.getElementById("interruttore");
	var bottonePompa2 = document.getElementById("motore");
    cambio = {};
    firebase.database().ref("serbatoio").once("value").then(function (snapshot) {
        if (snapshot.val().automatico) {

            cambio["automatico"] = false;
            firebase.database().ref("serbatoio").update(cambio);
			//bottonePompa2.setAttribute("disabled", "false");
			bottonePompa2.disabled = false;
        } else {
            cambio["automatico"] = true;
            firebase.database().ref("serbatoio").update(cambio);
			//bottonePompa2.setAttribute("disabled", "true");
			bottonePompa2.disabled = true;
        }
        outputAutomatismi();
    });
}