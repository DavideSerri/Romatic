
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
        $('#myModal').modal('show');
    });



/* card flip */
$(".flip").hover(function(){
  $(this).find(".card").toggleClass("flipped");
  return false;
});

var menuRasp = document.getElementById("selectRasp");
menuRasp.addEventListener("click", apriMenuRasp, false);


function apriMenuRasp() {
	
	window.open("Panel.html");
	
	
}

	



