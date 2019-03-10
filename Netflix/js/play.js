function cargarDatosIniciales(){
	
	nAccount = obtenerNetflixDelNavegador();
	
	if (nAccount == null){
		nAccount = new Netflix(null, "profeman", "vivayo");
		guardarNetflixEnNavegador(nAccount);
	}	
	
	pintar();
}


function pintar(){
	
	document.getElementById("capis").innerHTML = "";
	
	let netflixAccount = obtenerNetflixDelNavegador();
	
	let capitulos = netflixAccount.getCapitulos();
	
	let idBase =  new Date().getTime();
	let cont = 0;
	for (let capi of capitulos){
		//obtener el div de pintar
		let div = document.getElementById("capis");
		
		//pintar los datos del capitulos
		let datos = capi.nombreCapitulo + " - " + 
			capi.nombreSerie + " - " + 
			capi.temporada + "x" + capi.posicion + 
			" - "  + capi.duracion;
			
		let divHijo = document.createElement("div");
		divHijo.innerHTML = datos;
		divHijo.id = idBase++;
		
		if (cont % 2 == 0) {
			divHijo.classList.add("interno");
		}
		else {
			divHijo.classList.add("interno2");
		}
		
		
		//añadirlo al div
		div.appendChild(divHijo);	
		cont++;		
	}
}


function guardar(){
	let nombreCapitulo = document.getElementById("name").value;
	let nombreSerie = document.getElementById("show").value;
	let temporada = document.getElementById("season").value;
	let posicion = document.getElementById("pos").value;
	let genero = document.getElementById("genre").value;
	let duracion = document.getElementById("duration").value;
	
	if (nombreCapitulo != "" && nombreSerie != "" &&
		temporada != "" && posicion != "" &&
		genero != "" && duracion != "") {
			
		let capi = new Capitulo(null, nombreCapitulo, 
		nombreSerie, temporada, posicion, genero, 
		duracion);
		console.log(capi);
		nAccount.addCapitulo(capi);
		guardarNetflixEnNavegador(nAccount);
		pintar();
	}
}

function guardarNetflixEnNavegador(netflixAccount){	
	let jCarlosFlix = netflixAccount.toJSONObject();
	jCarlosFlix = JSON.stringify(jCarlosFlix);

	sessionStorage.setItem("netflix", jCarlosFlix);	
}


function obtenerNetflixDelNavegador(){
	let jNetlixAccount = sessionStorage.getItem("netflix");	
	
	let netflixAccount = null;
	
	if (jNetlixAccount != null){		
		jNetlixAccount = JSON.parse(jNetlixAccount);
		
		netflixAccount = new Netflix(jNetlixAccount);
	}	
	
	return netflixAccount;	
}