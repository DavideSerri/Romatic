//inizializzo il valore dell'interruttore e appena carica la pagina
var valoreInterruttore;
//prendo l'interruttore 
var interruttore = document.getElementById("interruttore");
    interruttore.addEventListener("click", accensione, false);
//Funzione che setta il suo valore, valore: boolean
function setValoreInterruttore(valore) {
    valoreInterruttore = valore;
}
//Scrivo nel div se la luce è accesa o spenta
function outputAccensione() {
    
    var visualizzaInterruttore = document.getElementById("visualizzaInterruttore");
    //guardo all'interno del database nella sezione luci e i valori vanno
    //all'interno di snapshot
    firebase.database().ref("luci").once("value").then(function (snapshot) {
        //setto il valore dell'interruttore  = al valore del database
        setValoreInterruttore(snapshot.val().interruttore);
        //faccio i vari controllo sullo stato dell'interruttore e cambio l'output
        if (snapshot.val().interruttore === false) {
           
            visualizzaInterruttore.innerHTML = "Luci Spente";
        } else {
            
            visualizzaInterruttore.innerHTML = "Luci Accese";
        }

    });
}
//cambio lo stato dell'interruttore quando clicco il bottone
//e do in output il valore dell'interruttore nello stato T+1
function accensione() {
    
    var aggiornamenti = {}
    //dentro aggiornamenti ci vanno a finire il valore che voglio di interruttore

    if (valoreInterruttore == false) {
        
      //aggiorno lo stato dell'interruttore a true
       aggiornamenti['interruttore'] = true;
       firebase.database().ref("luci").update(aggiornamenti);
     
        outputAccensione();
    } else {
     
    //aggiorno lo stato dell'interruttore a false
       aggiornamenti['interruttore'] = false;
       firebase.database().ref("luci").update(aggiornamenti);
        outputAccensione();
    }
	
}