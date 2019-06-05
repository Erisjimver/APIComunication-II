function iniciar(){

	window.addEventListener("message",receptor,false);

}


function receptor(e) {
	
	var zonamensajes= document.getElementById("zonamensajes");

	if(e.origin=="http://localhost")
	{

		zonamensajes.innerHTML+="mensaje desde: "+e.origin+"<br>";

		zonamensajes.innerHTML+="Mensaje: "+e.data+"<br>";

		e.source.postMessage("Mensaje recibido correctamente"+"<br>", e.origin);
	}

	else
	{
		e.source.postMessage("Mensaje erroneo"+"<br>", e.origin);

	}
}



window.addEventListener("load",iniciar,false);
