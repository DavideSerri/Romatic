function outputInterruttorePompa() {
    var outputInterruttorePompa = document.getElementById("visualizzaMotore");
    firebase.database().ref("serbatoio").once("value").then(function (snapshot) {
        if (snapshot.val().motore == true) {
            outputInterruttorePompa.innerHTML = "Motore Acceso";
           
        } else {
           
            outputInterruttorePompa.innerHTML = "Motore Spento";
        }
    });
}
var bottonePompa = document.getElementById("bottonePompa");
    bottonePompa.addEventListener("click", cambioStatoPompa, false);
function cambioStatoPompa() {
        var aggiornamentoStatoPompa = {}

        firebase.database().ref("serbatoio").once("value").then(function (snapshot) {
            if (snapshot.val().motore == true) {

                aggiornamentoStatoPompa["motore"] = false;
                firebase.database().ref("serbatoio").update(aggiornamentoStatoPompa);
               
            } else {
                aggiornamentoStatoPompa["motore"] = true;
                firebase.database().ref("serbatoio").update(aggiornamentoStatoPompa);
                
            }
        });
       outputInterruttorePompa();
    }
       