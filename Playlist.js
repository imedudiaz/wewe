function Playlist(jPlaylist, name) {
	
	this.songs = new Array();
	this.currentlePlaying = 0;
	
	if (jPlaylist){
		this.name = jPlaylist.name;
		
		let jSongsArray = jPlaylist.songs;
		
		for (let jSong of jSongsArray){
			let song = new Song(jSong);
			this.songs.push(song);
		}		
	}
	else {
		this.name = name;
	}
	
	Playlist.prototype.addSong = function(song) {
		this.songs.push(song);
	}
	Playlist.prototype.getDuration = function() {
		
		let duracion = 0;
		
		for(let i = 0; i < this.songs.length; i++) {
			
				duration += this.songs[i].getDuration;
		}
		
		return duration;
		
	}
	Playlist.prototype.removeSong = function() {
			let posicion = -1;
			
			for(let i = 0; i < this.songs.length && posicion == -1; i++) {
				if(this.songs[i].getId()) {
					posicion = i;
				}
			}
			if(posicion !=-1) {
				this.song.splice(posicion,1);
				
			}
			
			
	}
	Playlist.prototype.shuffle = function() {
		let shuffledSongs = new Array() ;
		let songsLength = this.songs.length;
		for(let i = 0; i < songsLength;i++) {
			let numAlea = obtenerAleatorio(0, this.songs.length -1);
			shuffledSongs.push (this.songs.splice(numAlea, 1));
		}
		this.songs = shuffledSongs;
		
		this.currentlePlaying = 0;
		
	}
	Playlist.prototype.nextSong = function() {
		this.currentlePlaying++;
		
		if (currentlePlaying == this.songs.length) {
			this.currentlePlaying = 0;
		}
		return this.songs[this.currentlePlaying]
	}
	
	Playlist.prototype.top = function() {
		
		let topBands = new Array();
		
		if(this.songs.length > 0) {
			
			for(let i = 0; i < this.songs.length; i++) {
				
				if(this.bandExistInTopArray(this.songs[i], topBands)) {
					searchAndIncrementBandAppearance(topBands, this.songs[i].getBand());
				}
				else {
					topBands.push(new Top(this.songs[i].getBand()));
				}
			}
			
			//ordeno el array
			topBands.sort(
				function(a,b){
					if (b.getAppearances() < a.getAppearances()){
						return -1;
					}
					else if (b.getAppearances() > a.getAppearances()){
						return 1;
					}
					else if (b.getAppearances() == a.getAppearances()){
						if (b.getBand() < a.getBand()){
							return 1;
						}
						else if (b.getBand() > a.getBand()){
							return -1;					
						}
						else {
							return 0;
						}
					}
				}
			);
			
			if (topBands.length > 5){
				topBands = topBands.splice(0, 5);				
			}			
		}
		
		return topBands;		
	}
	
	Playlist.prototype.bandExistInTopArray = function(song,band) {
		let exists = false;
		
		for(let i = 0; i < bands.length && !exists; i++) {
			if(bands[i].getBand() == song.getBand()) {
				exists = true;				
			}
		}
		
		return exists;
	}
	
	Playlist.prototype.searchAndIncrementBandAppearance = function(bands, band) {
		let found = false;
		
		for(let i = 0; i < bands.length && !found; i++) {
			if(bands[i].getBand() == band) {
				bands[i].addAppearance();
				found = true;
			}
		}
		
		return found;
	}
	
	
	Playlist.prototype.orderByDuration = function() {
		
		this.songs.sort(
			function (a,b){
				return b.getDuration() - a.getDuration();
			}
		);
		
		return this.songs;
	}
	
	
	Playlist.prototype.toJSONObject = function() {
		let jPlaylist = {};
		
		jPlaylist.name = this.name;
		
		let jSongs = new Array();
		
		for (let song of this.songs){
			jSongs.push(song.toJSONObject());
		}
		
		jPlaylist.songs = jSongs;
		
		return jPlaylist;
	}
}