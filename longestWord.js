function mayorPalabra(cadena, totalPalabras){
	
	var tamPalActual; 			//Tamaño de palabra actual
	var tamPalAnterior = 0;		//Tamaño de palabra anterior
	var j=0;
	
	//evaluatr el numero de palabras
	for(var i = 0; i <= totalPalabras; i++){
		
		tamPalActual = 0;
	//obtener el tamaño de la palabra actual
		while(j != cadena.length){
			//console.log("Letra: %s", cadena[j]);
			tamPalActual++;
				j++
			if(cadena[j] == ' '){
				j++
				break;
			}

		}
	//si la palabra actual es mayor a la anterior...		
		if(tamPalActual > tamPalAnterior)
			tamPalAnterior = tamPalActual;
		//console.log("palabra %d", i);
	}
	
	return tamPalAnterior;
}

module.exports.mayorPalabra = mayorPalabra;
