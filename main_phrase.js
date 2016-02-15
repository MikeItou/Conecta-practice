/*
Marco que rodea a una frase
Autor: Peña Torres Miguel Ángel
Version: 1.0
*/
var numPalabra = require('./Project/numberOfWords');
var palLarga = require('./Project/longestWord');
var imprimirCadena = require('./Project/printWord');
const paginaHttp = require('http');
 
var cadena = "Hello this practice is for conecta";
var totalPalabras = numPalabra.noPalabras(cadena);
var tamCadenaMayor = palLarga.mayorPalabra(cadena, totalPalabras);
var imprimirMensaje = imprimirCadena.impMenMarco(cadena, tamCadenaMayor, totalPalabras);
console.log('Cadena a evaluar: %s', cadena);
console.log("\nEl numero de palabras de la cadena es: %d ", totalPalabras);
console.log("La palabra mas grande contiene %d letras", tamCadenaMayor);
console.log("El mensaje sera impreso en un marco...\n");

paginaHttp.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(imprimirMensaje);
}).listen(8124);

console.log('Ejemplo corriendo en http://127.0.0.1:8124/');
//console.log(imprimirMensaje);
