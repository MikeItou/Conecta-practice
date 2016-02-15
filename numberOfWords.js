function noPalabras(cadena){
	var contadorPalabras = 0;
	
	for(var i = 0; i<= cadena.length;){
		//si el actual no es espacio y el siguiente es espacio o es final de cadena...contar palabras
		if(cadena[i] != ' ' && (cadena[i+1] == ' ' || i+1 == cadena.length))
			contadorPalabras++;
		i++;
	}
	
	return contadorPalabras;
}

module.exports.noPalabras = noPalabras; 
