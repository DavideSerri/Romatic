
function outputLivelloAcqua() {
    var outputLivello = document.getElementById("sensoreLivello");
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/serbatoio").once("value").then(function (snapshot) {
		if (snapshot.val().sensoreLivello <= 10) {
			
		outputLivello.innerHTML = "<span class='glyphicon glyphicon-warning-sign' aria-hidden='true'></span>"+" Ricarica Serbatoio!";	
		outputLivello.style.width = "100%";
		outputLivello.className = "progress-bar progress-bar-danger";		
		}
		else {
		outputLivello.className = "progress-bar progress-bar-info";	
        outputLivello.innerHTML = snapshot.val().sensoreLivello+"%";
		outputLivello.style.width = snapshot.val().sensoreLivello+"%";
		}
    });
	
	
}



