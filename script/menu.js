
//COLLEGAMENTO FIREBASE
var config = {
    apiKey: "AIzaSyCdegHgPn2Uklg8DuDRt1JPP1rvdvzy3sM",
    authDomain: "aromatic-5cf2a.firebaseapp.com",
    databaseURL: "https://aromatic-5cf2a.firebaseio.com",
    storageBucket: "aromatic-5cf2a.appspot.com",
};

firebase.initializeApp(config);


/* load login */

$(window).load(function(){
        $('#login').modal('show');
    });



/* card flip */
$(".flip").hover(function(){
  $(this).find(".card").toggleClass("flipped");
  return false;
});


var apriRegistrazione = document.getElementById("openRegistration");
    apriRegistrazione.addEventListener("click", openRegistration, false);

var sendRegistration = document.getElementById("sendRegistration");
    sendRegistration.addEventListener("click",registra,false);

var menuRasp = document.getElementById("selectRasp");
    menuRasp.addEventListener("click", apriMenuRasp, false);

var logout = document.getElementById("logout");
    logout.addEventListener("click", doLogout, false);

var apriLogin = document.getElementById("loginUtente");
    apriLogin.addEventListener("click",doLogin,false);

var apriLogin2 = document.getElementById("apriLogin2");
    apriLogin2.addEventListener("click",apriFinestraLogin,false);

var apriLogin3 = document.getElementById("apriLogin");
    apriLogin3.addEventListener("click",apriFinestraLogin,false);

var addRasp = document.getElementById("addRasp");
    addRasp.addEventListener("click",apriAggiuntaPrototipo, false);

var firstPrototipo = document.getElementById("firstPrototipo");
	firstPrototipo.addEventListener("click",function(){apriPanel(1)},false);

var secondPrototipo = document.getElementById("secondPrototipo");
	secondPrototipo.addEventListener("click",function(){apriPanel(2)},false);

var profile = document.getElementById("profile");
	profile.addEventListener("click",apriProfilo,false);
	
	
//Funzione che permette all'utente di modificare le sue informazioni	
function apriProfilo() {
	
    $('#modalProfilo').modal('show');

	var bottoneModificaNome = document.getElementById("modificaNomeUtente");
	    bottoneModificaNome.addEventListener("click", modificaNomeUtente, false);
	var bottoneModificaPassword = document.getElementById("modificaPassword");
	    bottoneModificaPassword.addEventListener("click", modificaPassword, false);
	var bottoneModificaEmail = document.getElementById("modificaEmail");
	    bottoneModificaEmail.addEventListener("click", modificaEmailUtente, false);
	
}
//Funzione che modifica la mail
function modificaEmailUtente() {
    var email = prompt("Inserisci la nuova email");
    utenteCorrente = firebase.auth().currentUser;
    utenteCorrente.updateEmail(email).then(function () {
        alert("caricamento della nuova mail corretto");
    }, function (error) {
        alert(error);
    });

}
//Funzione per la modifica della password
function modificaPassword() {
    var password = prompt("Inserisci la nuova password");
    utente = firebase.auth().currentUser;
    utente.updatePassword(password).then(function () {
        alert("Password caricata bene :-) ");
    }, function (error) {
        alert(error);
    });
}
//Funzione per il cambio nome utente
function modificaNomeUtente() {
    var nomeNuovo = prompt("Inserisci il tuo nuovo nome utente");
    utente = firebase.auth().currentUser;
    utente.updateProfile({
        displayName:nomeNuovo
    });
    setTimeout(function () {
        var titolo = document.getElementById("titoloVero");       
        titolo.innerHTML = " Aromatic - " + firebase.auth().currentUser.displayName;
    }, 1000);
}

function apriPanel(numeroPrototipo) {
	
	
	
	if (utente != null) {
	    //Prendo i due ID
	    firebase.database().ref("/utenti/"+utente.uid).once("value").then(function (snapshot) {
	        //Controlli e output sul primo rasp
			
			if (numeroPrototipo==1) {
	        if(snapshot.val().rasp1 != ""){
	            window.localStorage.setItem("numeroPrototipo",snapshot.val().rasp1);
				window.open("Panel.html","_self");
	        }
			}
			else {
				
				if(snapshot.val().rasp2 != ""){
	            window.localStorage.setItem("numeroPrototipo",snapshot.val().rasp2);
				window.open("Panel.html","_self");
	        }
				
			}
	
	});
	}

	
}
//Funzione che apre il modulo per scegliere il raspberry	
function apriMenuRasp() {
	
	$('#modalSelezionePrototipo').modal('show');
	//*window.open("Panel.html");
	var nomePrototipoUno = document.getElementById("labelPrototipo1");
	var nomePrototipoDue = document.getElementById("labelPrototipo2");
	utente = firebase.auth().currentUser;
	if (utente != null) {
	    //Prendo i due ID
	    firebase.database().ref("/utenti/"+utente.uid).once("value").then(function (snapshot) {
	        //Controlli e output sul primo rasp
	        if(snapshot.val().rasp1 != ""){
	            nomePrototipoUno.innerHTML= "Prototipo 1: "+snapshot.val().rasp1;
	        }else{
	            nomePrototipoUno.innerHTML="Prototipo 1: Non Presente";
	        }
            //Controlli e output sul secondo rasp
	        if(snapshot.val().rasp2 != ""){
	            nomePrototipoDue.innerHTML= "Prototipo 2: "+snapshot.val().rasp2;
	        }else{
	            nomePrototipoDue.innerHTML="Prototipos 2: Non Presente";
	        }
	    });
	}
	
}

function apriAggiuntaPrototipo() {
	
    $('#modalPrototipo').modal('show');
    var bottoneAggiuntaPrototipo = document.getElementById("aggiungiPrototipo");
        bottoneAggiuntaPrototipo.addEventListener("click", aggiungiID, false);
		
}
//Funzione che collega il prototipo all'utente
function aggiungiID() {
    var utente = firebase.auth().currentUser;
    if (utente != null) {
        var ID = document.getElementById("idPrototipo").value;
        controllaRasp(ID) //Controlla se l'ID è valido e lo aggiunge
       
    } else {
        //Utente non loggato
        alert("Utente non loggato >:/");
    }
}
//Funzione che controlla l'esistenza dell'ID del raspberry da aggiungere
//Return = false  se l'IDRasp non è valido
//Return = true   se il raspberyy Esiste
function controllaRasp(IDRasp) {

    if (IDRasp == "") {
        //ID non valido di conseguenza raspberry non esistente
     
    } else {
        var utente = firebase.auth().currentUser;
        if (utente == null) {
            alert("Utente Non Loggato!");
        } else {
            firebase.database().ref("/raspberry/\"" + IDRasp + "\"/Serbatoio").once("value").then(function (snapshot) {
                if (snapshot.val() != null) {
                    //Raspberry Esistente!  Quindi lo aggiungo //Entro nel campo utente
                    firebase.database().ref("/utenti/" + utente.uid).once("value").then(function (snapshot) {
                        if (snapshot.val().rasp1 == "") {
                            var update = {};
                            update["/utenti" + "/" + utente.uid + "/rasp1"] = IDRasp;
                            firebase.database().ref().update(update);
                            alert("aggiunto");
                            $('#modalPrototipo').modal('hide');
                        } else if ((IDRasp != snapshot.val().rasp1) && (IDRasp != snapshot.val().rasp2)) {
                            var update = {};
                            update["/utenti" + "/" + utente.uid + "/rasp2"] = IDRasp;
                            firebase.database().ref().update(update);
                            alert("aggiunto");
                            $('#modalPrototipo').modal('hide');
                        } else {
                            alert("Rasp gia' esistente");
                        }
                    });
                   
					
                } else {
                    alert("Raspberry non esistente");
                    //Raspberry non esistente!
                }
            });
        }

    }
    

}



function registra() {
    var nomeUtente = document.getElementById("nomeUtente").value;
    var email = document.getElementById("emailRegistrazione").value;

    var password = document.getElementById("passwordRegistrazione").value;
    var confermaPassword = document.getElementById("confermaPasswordRegistrazione").value;

    if (password === confermaPassword) {

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert("errore: " + error);
            }
            // [END_EXCLUDE]
        });
		setTimeout(function(){
			
		var utenteCorrente = firebase.auth().currentUser;
        //Aggiornamento firebase
        if (utenteCorrente != null) {
            var aggiornamentoNome = {}
            aggiornamentoNome["/utenti/" + utenteCorrente.uid + "/rasp1"] = "";
            firebase.database().ref().update(aggiornamentoNome);
            aggiornamentoNome["/utenti/" + utenteCorrente.uid + "/rasp2"] = "";
            firebase.database().ref().update(aggiornamentoNome);
            //Update del nome utente
            
            utenteCorrente.updateProfile({
                displayName: nomeUtente
            });
            
            $('#successRegistration').modal('show');
            $('#register').modal('hide');
        } else {
            $('#register').modal('show');
        }	
			
		},1000);
        
    } else {
        $('#register').modal('show');
    }	
}
function apriFinestraLogin() {
    $('#login').modal('show');
}
function doLogin() {
    console.log("sono entrato dentro");
    var bottoneLogin = document.getElementById("loginUtente");
    var emailUtente = document.getElementById("Email").value;
    var passwordUtente = document.getElementById("passwordUtente").value;
    firebase.auth().signInWithEmailAndPassword(emailUtente, passwordUtente).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(error);
        }
        // [END_EXCLUDE]
        //CONTINUO A MOSTRARE LA PAGINA

        $('#login').modal('show');
    });
	setTimeout(function(){
		
		if (firebase.auth().currentUser != null) {
        console.log("ora tolgo tutto");
        var titolo = document.getElementById("titoloVero");
        titolo.innerHTML = " Aromatic - " + firebase.auth().currentUser.displayName;
       $('#login').modal('hide');
    } else {
        console.log("stronzo qualcosa di sbagliato");
        $('#login').modal('show');
    }
		
	},1000);
    
    
}

function openRegistration() {
	
	$('#register').modal('show');
	
}

function doLogout() {
	
	firebase.auth().signOut();
	
	$('#login').modal('show');
	
	
}

	



