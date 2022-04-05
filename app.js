

/* *

A partir de la página web proporcionada y utilizando las funciones DOM, mostrar en pantalla la siguiente información:

* Número de enlaces de la página
* Dirección a la que enlaza el penúltimo enlace
* Numero de enlaces que enlazan a http://prueba
Número de enlaces del tercer párrafo

*/

let enlaces = document.getElementsByTagName('a').length;
document.getElementById('num-enlaces').innerHTML = enlaces ;
let divEjercicios = document.getElementById('num-enlaces');
let enlacesArray = document.getElementsByTagName('a');


let penultimoEnlace = enlacesArray[enlaces-2].getAttribute('href');

let p1 = document.createElement('p');
let texto1 = document.createTextNode(penultimoEnlace);
p1.appendChild(texto1);
divEjercicios.appendChild(p1);  // null, no tiene direccion



let contador = 0;
for(let i = 0; i < enlacesArray.length; i++){
  if(enlacesArray[i] == 'http://prueba'){
    contador++
  }
}
let p2 = document.createElement('p');
let texto2 = document.createTextNode('Enlaces a "http://prueba": ' +contador); // 0, ninungo enlaza a esa direcion
p2.appendChild(texto2);
divEjercicios.appendChild(p2);



let parrafos = document.getElementsByTagName('p');
let enlacesParrafo3 = document.getElementsByTagName('p')[2].getElementsByTagName('a').length;
console.log('Numero de enlaces en el 3er parrafo: '+ enlacesParrafo3);



