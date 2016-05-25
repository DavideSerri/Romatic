
//funzione per l'output della luminosità del nostro fotosensore
function caricaLuminosita() {
    var casellaLuminosita = document.getElementById("luminosita"); //caching del posto dove vado a inserire l'output
                                                                  
       
    
    firebase.database().ref("luci").once("value").then(function (snapshot) {
        casellaLuminosita.innerHTML ="luminosit&agrave;: "+ snapshot.val().luminosita; //inserimento del valore della luminosità       
    });
}