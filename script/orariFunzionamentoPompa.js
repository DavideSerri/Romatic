function outputDurataAccensionePompa() {
    var outputAccensionePompa = document.getElementById("accensionePompa");
    var outputSpegnimentoPompa = document.getElementById("spegnimentoPompa");
    firebase.database().ref("serbatoio").once("value").then(function (snapshot) {
        outputAccensionePompa.value = snapshot.val().durataAccensione;
        outputSpegnimentoPompa.value = snapshot.val().durataSpegnimento;
    });
}
var outputAccensionePompaOnChange = document.getElementById("accensionePompa");
    outputAccensionePompaOnChange.addEventListener("input", cambioDurataAccensionePompa, false);

var outputSpegnimentoPompaOnChange = document.getElementById("spegnimentoPompa");
    outputSpegnimentoPompaOnChange.addEventListener("input", cambioDurataSpegnimentoPompa, false);

function cambioDurataAccensionePompa() {
    var aggiornamentoAccensionePompa = {};
    if (!isNaN(parseInt(outputAccensionePompaOnChange.value))) {
        aggiornamentoAccensionePompa["durataAccensione"] = parseInt(outputAccensionePompaOnChange.value);
        firebase.database().ref("serbatoio").update(aggiornamentoAccensionePompa);
    } else {
        aggiornamentoAccensionePompa["durataAccensione"] = 1; //valore di default
        firebase.database().ref("serbatoio").update(aggiornamentoAccensionePompa);
    }

};
function cambioDurataSpegnimentoPompa() {
    var aggiornamentoSpegnimentoPompa = {};
    if (!isNaN(parseInt(outputSpegnimentoPompaOnChange.value))) {
        aggiornamentoSpegnimentoPompa["durataSpegnimento"] = parseInt(outputSpegnimentoPompaOnChange.value);
        firebase.database().ref("serbatoio").update(aggiornamentoSpegnimentoPompa);
    } else {
        aggiornamentoSpegnimentoPompa["durataSpegnimento"] = 14; //valore di default
        firebase.database().ref("serbatoio").update(aggiornamentoSpegnimentoPompa); 
    }

}
