function Netflix (jNetflix, username, password){
	this.username;
	this.password;
	this.capitulos = new Array();
	this.posicionUltimoReproducido = 0;
	
	if (jNetflix){
		this.username = jNetflix.username;
		this.password = jNetflix.password;
		
		let jCapitulos = jNetflix.capitulos;
		for (let i = 0; i < jCapitulos.length; i++){
			let capitulo = new Capitulo(jCapitulos[i]);
			this.capitulos.push(capitulo);
		}
	}
	else {
		this.username = username;
		this.password = password;
	}
	
		
	Netflix.prototype.getDuracion = function(){
		let sumatorio = 0;
		
		for (let capi of this.capitulos){
			sumatorio += capi.getDuration();
		}
		
		return sumatorio;
	}
	
	Netflix.prototype.getUltimoReproducido = function(){
		return this.capitulos[this.posicionUltimoReproducido];
	}
	
	Netflix.prototype.getCapitulos = function(){
		return this.capitulos;
	}
	
	Netflix.prototype.play = function(){
		let capitulo = this.getUltimoReproducido();
		
		if (this.posicionUltimoReproducido < this.capitulos.length - 1){
			this.posicionUltimoReproducido++;
		}
		else {
			this.posicionUltimoReproducido = 0;
		}
		
		return capitulo;
	}
	
	Netflix.prototype.addCapitulo = function(capitulo){
		this.capitulos.push(capitulo);
	}
	
	Netflix.prototype.eliminarCapitulo = function(capitulo){
		let pos = -1;
		for (let i = 0; i < this.capitulos.length && pos == -1; i++){
			if (this.capitulos[i].getNombre() == capitulo.getNombre() &&
				this.capitulos[i].getNombreSerie() == capitulo.getNombreSerie())
				pos = i;
		}
		
		if (pos != -1) {
			this.capitulos.splice(pos, 1);
		}
	}
	
	Netflix.prototype.orderByDuration = function(){
		this.capitulos.sort(
			function(a,b){
				return b.getDuration() - a.getDuration();
			}
		);
	}
	
	Netflix.prototype.toJSONObject = function(){
		let jNetflix = {};
		
		jNetflix.username = this.username;
		jNetflix.password = this.password;
		
		let jCapitulos = new Array();
		for (let i = 0; i < this.capitulos.length; i++){
			let jCapitulo = this.capitulos[i].toJSONObject();
			jCapitulos.push(jCapitulo);
		}
		
		jNetflix.capitulos = jCapitulos;
		
		return jNetflix;
	}

}