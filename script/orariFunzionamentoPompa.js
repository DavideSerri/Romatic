function outputDurataAccensionePompa() {
    var outputAccensionePompa = document.getElementById("accensionePompa");
    var outputSpegnimentoPompa = document.getElementById("spegnimentoPompa");
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/serbatoio").once("value").then(function (snapshot) {
        outputAccensionePompa.innerHTML = " Accensione : "+snapshot.val().durataAccensione+"m"+" "+" "+"<span>"+
		"<button type='button' class='btn btn-success' id='cambioDurataAccensionePompa' onclick='cambioDurataAccensionePompa()'>Modifica</button>"+"</span>";
        outputSpegnimentoPompa.innerHTML = "Spegnimento: "+snapshot.val().durataSpegnimento+"m"+"<span>"+
		"<button type='button' class='btn btn-success' id='cambioDurataSpegnimentoPompa' onclick='cambioDurataSpegnimentoPompa()'>Modifica</button>"+"</span>";
    });
}



function cambioDurataAccensionePompa() {
    var aggiornamentoAccensionePompa = {};
	var valore = "";
	while (isNaN(parseInt(valore))) {
            console.log("valore preso in input" + parseInt(valore));

            valore =  prompt("Nuova durata di accensione: ");
    }
	var outputAccensionePompa = document.getElementById("accensionePompa");
    aggiornamentoAccensionePompa["durataAccensione"] = parseInt(valore);
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/serbatoio").update(aggiornamentoAccensionePompa);
};
function cambioDurataSpegnimentoPompa() {
    var aggiornamentoSpegnimentoPompa = {};
	var valore = "";
	while (isNaN(parseInt(valore))) {
            console.log("valore preso in input" + parseInt(valore));

            valore =  prompt("Nuova durata di spegnimento: ");
    }
	var outputSpegnimentoPompa = document.getElementById("spegnimentoPompa");
    aggiornamentoSpegnimentoPompa["durataSpegnimento"] = parseInt(valore);
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/serbatoio").update(aggiornamentoSpegnimentoPompa);
}
