
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
var apriLogin = document.getElementById("apriLogin");
apriLogin.addEventListener("click",doLogin,false);
var apriLogin2 = document.getElementById("apriLogin2");
apriLogin2.addEventListener("click",doLogin,false);

function apriMenuRasp() {
	
	window.open("Panel.html");
	
	
}

function registra() {
	
	if(/*registrazione effettuata correttamente*/ 1==1) {
		
		$('#successRegistration').modal('show');
		
	}
	
	else {
		
		$('#register').modal('show');
		
	}
	
}

function doLogin() {
	
	$('#login').modal('show');
		
}

function openRegistration() {
	
	$('#register').modal('show');
	
}

function doLogout() {
	
	$('#login').modal('show');
	
	
}

	



