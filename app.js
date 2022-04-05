let hola = document.getElementById('hola');
hola.innerHTML = 'Hola Bienvenido a la manipulacion del DOM';


// Definimos el boton de guardar con el elemento buscado por id
const btnGuardar = document.getElementById('guardar');
// Definimos el input value buscando por id con query selector
const inputValue = document.querySelector('#input-1');
// Definimos un array vacio;
let arr = [];

//Creamos un Listener que escuchara el click del boton guardar.
btnGuardar.addEventListener('click', ()=>{
  // agrega el valor del input al array
  arr.push(inputValue.value);
  // lo guardamos en local storage con la llave lista pokemon y el valor es el arreglo arr
  localStorage.setItem('lista-pokemon', arr);
  // Imprimir en consola el arreglo actualizado
  console.log(arr);
  // limpiamos el valor del input
  inputValue.value = '';

  renderElement(arr);
})


function renderElement(){
  let container = document.getElementById('lista');
  container.innerHTML = '';
  arr.forEach((el)=>{
    container.innerHTML += `
      <li>${el}</li>
  `;
  });

}


function getElements(){
  let localS = localStorage.getItem('lista-pokemon');

   Array = localS.split(',');
}

getElements();