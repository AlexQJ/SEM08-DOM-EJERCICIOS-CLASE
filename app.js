

/*

A partir de la página web proporcionada y utilizando las funciones DOM, mostrar en pantalla la siguiente información:

Número de enlaces de la página
Dirección a la que enlaza el penúltimo enlace
Numero de enlaces que enlazan a http://prueba
Número de enlaces del tercer párrafo

*/


console.log(document.getElementsByTagName("a"));
let enlaces = document.getElementsByTagName("a").length;
document.getElementById("num-enlaces").innerHTML = enlaces