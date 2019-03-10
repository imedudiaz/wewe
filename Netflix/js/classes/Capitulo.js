function Capitulo(jCapitulo, nombreC, nombreS, temp, posicion, genero, duracion){
	this.nombreCapitulo;
	this.nombreSerie;
	this.temporada;
	this.posicion;
	this.genero = Capitulo.GENERO_DRAMA;
	this.duracion;
	this.date = new Date();
	
	//constructor
	if (jCapitulo){
		this.nombreCapitulo = jCapitulo.nombreCapitulo;
		this.nombreSerie = jCapitulo.nombreSerie;
		this.temporada = jCapitulo.temporada;
		this.posicion = jCapitulo.posicion;
		this.genero = jCapitulo.genero;
		this.duracion = jCapitulo.duracion;
		this.date = jCapitulo.date;
	}
	else {
		this.nombreCapitulo = nombreC;
		this.nombreSerie = nombreS;
		this.temporada = temp;
		this.posicion = posicion;
		this.genero = genero;
		this.duracion = duracion;
	}
	
	Capitulo.prototype.getDuration = function(){
		return this.duracion;
	}
	
	Capitulo.prototype.getNombre = function(){
		return this.nombreCapitulo;
	}
	
	Capitulo.prototype.getNombreSerie = function(){
		return this.nombreSerie;
	}
	
	
	Capitulo.prototype.toJSONObject = function(){
		let jCapitulo = {};
		
		jCapitulo.nombreCapitulo = this.nombreCapitulo;
		jCapitulo.nombreSerie = this.nombreSerie;
		jCapitulo.temporada = this.temporada;
		jCapitulo.posicion = this.posicion;
		jCapitulo.genero = this.genero;
		jCapitulo.duracion = this.duracion;
		jCapitulo.date = this.date;
		
		return jCapitulo;
	}
	
}

Capitulo.GENERO_DRAMA = 1;
Capitulo.GENERO_COMEDIA = 2;
Capitulo.GENERO_ACCION = 3;
Capitulo.GENERO_INDIE = 4;
Capitulo.GENERO_TERROR = 5;
Capitulo.GENERO_LAOSTIA = 6;