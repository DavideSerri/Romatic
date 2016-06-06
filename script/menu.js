
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
    apriRegistrazione.addEventListener("click",openRegistration, false);
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
	
	
	
function apriProfilo() {
	
	$('#modalProfilo').modal('show');
	
	
}	


function apriPanel(numeroPrototipo) {
	
	window.open("Panel.html");
	localStorage.setItem("numeroPrototipo",numeroPrototipo);
	
}
	
function apriMenuRasp() {
	
	$('#modalSelezionePrototipo').modal('show');
	//*window.open("Panel.html");
	
	
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
                        } else if (snapshot.val().rasp2 != snapshot.val().rasp1) {
                            var update = {};
                            update["/utenti" + "/" + utente.uid + "/rasp2"] = IDRasp;
                            firebase.database().ref().update(update);
                        } else {
                            alert("Gia' esistente");
                        }
                    });
                    alert("Aggiunto");
					$('#modalPrototipo').modal('hide');
                } else {
                    alert("Raspberry non esistente");
                    //Raspberry non esistente!
                }
            });
        }

    }
    

}


//TODO SISTEMARE IL NOME UTENTE (PROB firebase bug)
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
    if (firebase.auth().currentUser != null) {
        console.log("ora tolgo tutto");
        var titolo = document.getElementById("titoloVero");
        titolo.innerHTML = " Aromatic - " + firebase.auth().currentUser.displayName;
       $('#login').modal('hide');
    } else {
        console.log("stronzo qualcosa di sbagliato");
        $('#login').modal('show');
    }
    
}

function openRegistration() {
	
	$('#register').modal('show');
	
}

function doLogout() {
	
	$('#login').modal('show');
	
	
}

	



