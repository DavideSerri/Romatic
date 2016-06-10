//Script per la gestione dell'output del livello dell'acqua
function outputLivelloAcqua() {
    var outputLivello = document.getElementById("sensoreLivello");
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/serbatoio").once("value").then(function (snapshot) {
		if (snapshot.val().sensoreLivello <= 150) {
			
		outputLivello.innerHTML = "<span class='glyphicon glyphicon-warning-sign' aria-hidden='true'></span>"+" Motore Spento! Ricarica Serbatoio!";	
		outputLivello.style.width = "100%";
		outputLivello.className = "progress-bar progress-bar-danger";		
		}
		else {
			if (snapshot.val().sensoreLivello >= 450) {	
			outputLivello.className = "progress-bar progress-bar-success";	
			outputLivello.innerHTML = "Livello acqua normale";
			outputLivello.style.width = "100%";
			}
			else {
				outputLivello.className = "progress-bar progress-bar-warning";	
				outputLivello.innerHTML = "<span class='glyphicon glyphicon-warning-sign' aria-hidden='true'></span>"+" Ricarica Serbatoio!";
				outputLivello.style.width = "50%";				
			}
		}
    });
	
	
}



