
var interruttore = document.getElementById("interruttore");
    interruttore.addEventListener("click", accensione, false);

function accensione() {
    var visualizzaInterruttore = document.getElementById("visualizzaInterruttore");
    if (visualizzaInterruttore.value == "Luci Spente") {
        visualizzaInterruttore.innerHTML = "Luci Accese";
    } else {
        visualizzaInterruttore.innerHTML="Luci Spente"
    }
	
	
}