
function outputLivelloAcqua() {
    var outputLivello = document.getElementById("sensoreLivello");
    firebase.database().ref("serbatoio").once("value").then(function (snapshot) {
        outputLivello.innerHTML = "Livello Acqua: " + snapshot.val().sensoreLivello;
    });
}