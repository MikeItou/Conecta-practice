function impMenMarco(cadena, tamCadenaMayor, totalPalabras){
	var mensaje = "";
	var splitCadena;
	var restPal = 0;
	
	//llenar parte superior del marco
	for(var i = 0; i <= tamCadenaMayor+2; i++)
		mensaje += '*';
	mensaje += '\n';
	
	//separar palabras
	splitCadena = cadena.split(' ');
	
	//con base en la palabras ya separadas, ingresar el restante del marco
	for(var j = 0; j < totalPalabras; j++){
		
		mensaje = mensaje + '*' + splitCadena[j];
		
		if(splitCadena[j].length <= tamCadenaMayor){
			restPal = tamCadenaMayor - splitCadena[j].length;
			//console.log("Resta no %d: %d", j, restPal);
			for(var k = 0; k <= restPal; k++)
				mensaje += ' ';
			mensaje += '*\n';
		}	
	}
	//ingresar parte inferior del marco
	for(var i=0; i <= tamCadenaMayor+2; i++)
		mensaje += '*';

	mensaje += '\n';

	return mensaje;
}

module.exports.impMenMarco = impMenMarco;
