function outputOraAccensione() {
	
	
	
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/luci").once("value").then(function (snapshot) {
        var n = snapshot.val().oraInizio;
			for (var i=1; i<=24; i++) {
		
		
		if (i != n) document.getElementById("on"+i).className = "btn btn-primary";
		 
	  }
	    document.getElementById("on"+n).className = "btn btn-success";
		
    });
	
	
	
	
}

function outputOraSpegnimento() {
	
	
	
    firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/luci").once("value").then(function (snapshot) {
        var n = snapshot.val().oraFine;
			for (var i=1; i<=24; i++) {
		
		
		if (i != n) document.getElementById("off"+i).className = "btn btn-primary";
		 
	  }
	    document.getElementById("off"+n).className = "btn btn-danger";
		
    });

}



var on1 = document.getElementById("on1");
on1.addEventListener("click", function(){cambioOraInizio(1);}, false);
var on2 = document.getElementById("on2");
on2.addEventListener("click", function(){cambioOraInizio(2);}, false);
var on3 = document.getElementById("on3");
on3.addEventListener("click", function(){cambioOraInizio(3);}, false);
var on4 = document.getElementById("on4");
on4.addEventListener("click", function(){cambioOraInizio(4);}, false);
var on5 = document.getElementById("on5");
on5.addEventListener("click", function(){cambioOraInizio(5);}, false);
var on6 = document.getElementById("on6");
on6.addEventListener("click", function(){cambioOraInizio(6);}, false);
var on7 = document.getElementById("on7");
on7.addEventListener("click", function(){cambioOraInizio(7);}, false);
var on8 = document.getElementById("on8");
on8.addEventListener("click", function(){cambioOraInizio(8);}, false);
var on9 = document.getElementById("on9");
on9.addEventListener("click", function(){cambioOraInizio(9);}, false);
var on10 = document.getElementById("on10");
on10.addEventListener("click", function(){cambioOraInizio(10);}, false);
var on11 = document.getElementById("on11");
on11.addEventListener("click", function(){cambioOraInizio(11);}, false);
var on12 = document.getElementById("on12");
on12.addEventListener("click", function(){cambioOraInizio(12);}, false);
var on13 = document.getElementById("on13");
on13.addEventListener("click", function(){cambioOraInizio(13);}, false);
var on14 = document.getElementById("on14");
on14.addEventListener("click", function(){cambioOraInizio(14);}, false);
var on15 = document.getElementById("on15");
on15.addEventListener("click", function(){cambioOraInizio(15);}, false);
var on16 = document.getElementById("on16");
on16.addEventListener("click", function(){cambioOraInizio(16);}, false);
var on17 = document.getElementById("on17");
on17.addEventListener("click", function(){cambioOraInizio(17);}, false);
var on18 = document.getElementById("on18");
on18.addEventListener("click", function(){cambioOraInizio(18);}, false);
var on19 = document.getElementById("on19");
on19.addEventListener("click", function(){cambioOraInizio(19);}, false);
var on20 = document.getElementById("on20");
on20.addEventListener("click", function(){cambioOraInizio(20);}, false);
var on21 = document.getElementById("on21");
on21.addEventListener("click", function(){cambioOraInizio(21);}, false);
var on22 = document.getElementById("on22");
on22.addEventListener("click", function(){cambioOraInizio(22);}, false);
var on23 = document.getElementById("on23");
on23.addEventListener("click", function(){cambioOraInizio(23);}, false);
var on24 = document.getElementById("on24");
on24.addEventListener("click", function(){cambioOraInizio(24);}, false);

//off inizializzazione click.

var off1 = document.getElementById("off1");
off1.addEventListener("click", function(){cambioOraFine(1);}, false);
var off2 = document.getElementById("off2");
off2.addEventListener("click", function(){cambioOraFine(2);}, false);
var off3 = document.getElementById("off3");
off3.addEventListener("click", function(){cambioOraFine(3);}, false);
var off4 = document.getElementById("off4");
off4.addEventListener("click", function(){cambioOraFine(4);}, false);
var off5 = document.getElementById("off5");
off5.addEventListener("click", function(){cambioOraFine(5);}, false);
var off6 = document.getElementById("off6");
off6.addEventListener("click", function(){cambioOraFine(6);}, false);
var off7 = document.getElementById("off7");
off7.addEventListener("click", function(){cambioOraFine(7);}, false);
var off8 = document.getElementById("off8");
off8.addEventListener("click", function(){cambioOraFine(8);}, false);
var off9 = document.getElementById("off9");
off9.addEventListener("click", function(){cambioOraFine(9);}, false);
var off10 = document.getElementById("off10");
off10.addEventListener("click", function(){cambioOraFine(10);}, false);
var off11 = document.getElementById("off11");
off11.addEventListener("click", function(){cambioOraFine(11);}, false);
var off12 = document.getElementById("off12");
off12.addEventListener("click", function(){cambioOraFine(12);}, false);
var off13 = document.getElementById("off13");
off13.addEventListener("click", function(){cambioOraFine(13);}, false);
var off14 = document.getElementById("off14");
off14.addEventListener("click", function(){cambioOraFine(14);}, false);
var off15 = document.getElementById("off15");
off15.addEventListener("click", function(){cambioOraFine(15);}, false);
var off16 = document.getElementById("off16");
off16.addEventListener("click", function(){cambioOraFine(16);}, false);
var off17 = document.getElementById("off17");
off17.addEventListener("click", function(){cambioOraFine(17);}, false);
var off18 = document.getElementById("off18");
off18.addEventListener("click", function(){cambioOraFine(18);}, false);
var off19 = document.getElementById("off19");
off19.addEventListener("click", function(){cambioOraFine(19);}, false);
var off20 = document.getElementById("off20");
off20.addEventListener("click", function(){cambioOraFine(20);}, false);
var off21 = document.getElementById("off21");
off21.addEventListener("click", function(){cambioOraFine(21);}, false);
var off22 = document.getElementById("off22");
off22.addEventListener("click", function(){cambioOraFine(22);}, false);
var off23 = document.getElementById("off23");
off23.addEventListener("click", function(){cambioOraFine(23);}, false);
var off24 = document.getElementById("off24");
off24.addEventListener("click", function(){cambioOraFine(24);}, false);


function cambioOraInizio(n) {

		
		for (var i=1; i<=24; i++) {
		
		
		if (i != n) document.getElementById("on"+i).className = "btn btn-primary";
		 
	  }
	    document.getElementById("on"+n).className = "btn btn-success";
		var changeValue = {};
		changeValue["oraInizio"]= n;
		firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/luci").update(changeValue);
		
    }
	
	function cambioOraFine(n) {

		
		for (var i=1; i<=24; i++) {
		
		
		if (i != n) document.getElementById("off"+i).className = "btn btn-primary";
		 
	  }
	    document.getElementById("off"+n).className = "btn btn-danger";
		var changeValue = {};
		changeValue["oraFine"]= n;
		firebase.database().ref("/raspberry/\"" + numeroPrototipo + "\"/luci").update(changeValue);
		
    }
		





