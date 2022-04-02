let hola = document.getElementById('hola');
hola.innerHTML = 'Hola Bienvenido a la manipulacion del DOM';


let fondo = document.getElementById("primer1");

fondo.addEventListener("click", myFondo);

function myFondo() {

  let element = document.getElementById("resultado");

  element.style.background = "#F8360D";

}

let tamanio = document.getElementById("segund2");

tamanio.addEventListener("click", myTamanio);

function myTamanio() {
  let element = document.getElementById("resultado");
  element.style.fontSize = "50px";
}

let border = document.getElementById('tercer3')

border.addEventListener('click', () => {
  let element = document.getElementById('resultado')
  element.style.border = '3px solid blue'
})
