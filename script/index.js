/*
- Pagina Script principale per la gestione del Pannello di controllo dell'Aromatic
- È presente in questo script il collegamento al Server Firebase riguardante il pannello di controllo
- E una funzione il LOOP che aggiorna i dati continuamente con un delay di un secondo
- Passaggio dati tramite local Storage dell'ID del prototipo che selezionato dall'utente
- Le funzioni qui presenti derivano dai file JavaScript presenti all'interno della cartella:  script
*/
//COLLEGAMENTO FIREBASE
var config = {
    apiKey: "AIzaSyCdegHgPn2Uklg8DuDRt1JPP1rvdvzy3sM",
    authDomain: "aromatic-5cf2a.firebaseapp.com",
    databaseURL: "https://aromatic-5cf2a.firebaseio.com",
    storageBucket: "aromatic-5cf2a.appspot.com",
};

var numeroPrototipo = localStorage.getItem("numeroPrototipo");

firebase.initializeApp(config);

setInterval(cicloServer, 1000); //ripeto ciclicamente la funzione  per aggiornare i dati dal server

function cicloServer() {
    
    caricaLuminosita(); //output del valore della luminosità dei led
    outputAccensione(); //output del valore on/off dei led
    outputSogliaMinimaAttuale();//Output dela soglia minima
    outputOraAccensione();//Output ora accensione delle luci
    outputOraSpegnimento();//Output ora spegnimento delle luci
    outputDurataAccensionePompa(); //Output durata accensione e spegnimento della pompa
    outputLivelloAcqua();//Output del livello dell'acqua 
    outputAutomatismi(); //Output "Automatici" e "Interruttori"

    
}




