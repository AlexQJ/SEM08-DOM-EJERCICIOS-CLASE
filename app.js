

/*

A partir de la página web proporcionada y utilizando las funciones DOM, mostrar en pantalla la siguiente información:

Número de enlaces de la página
Dirección a la que enlaza el penúltimo enlace
Numero de enlaces que enlazan a http://prueba
Número de enlaces del tercer párrafo

*/

console.log(document.getElementsByTagName('a'))
let enlaces = document.getElementsByTagName('a').length;
document.getElementById('num-enlaces').innerHTML = enlaces;

let penultimo = document.getElementsByTagName("a")[document.getElementsByTagName("a").length - 2]

let p1 = document.createElement('p')
let textoValor = document.createTextNode(penultimo.getAttribute('href'))
p1.appendChild(textoValor);
document.getElementById('num-enlaces').appendChild(p1);




let cont = 0;

for (let i = 0; i < document.getElementsByTagName("a").length; i++) {

  if (document.getElementsByTagName("a")[i] == 'http://prueba') cont++;

}
let p2 = document.createElement('p')
let texto2 = document.createTextNode(cont)
p1.appendChild(texto2);
document.getElementById('num-enlaces').appendChild(p2);

let p3 = document.getElementsByTagName('p').length;

if (p3 >= 3) {

  p3 = document.getElementsByTagName('p')[2].getElementsByTagName('a').length;

}

console.log(p3);