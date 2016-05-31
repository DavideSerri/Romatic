
//COLLEGAMENTO FIREBASE
var config = {
    apiKey: "AIzaSyCdegHgPn2Uklg8DuDRt1JPP1rvdvzy3sM",
    authDomain: "aromatic-5cf2a.firebaseapp.com",
    databaseURL: "https://aromatic-5cf2a.firebaseio.com",
    storageBucket: "aromatic-5cf2a.appspot.com",
};

firebase.initializeApp(config);

$(window).load(function(){
        $('#myModal').modal('show');
    });

	
//FINE COLLEGAMENTO AL DATABASE
setInterval(cicloServer, 1000); //ripeto ciclicamente la funzione  per aggiornare i dati dal server
function cicloServer() {
    
    caricaLuminosita(); //output del valore della luminosità dei led
    outputAccensione(); //output del valore on/off dei led
    outputSogliaMinimaAttuale();
    outputOraAccensione();
    outputOraSpegnimento();
    outputDurataAccensionePompa();
    outputLivelloAcqua();
    outputAutomatismi();

    
}




