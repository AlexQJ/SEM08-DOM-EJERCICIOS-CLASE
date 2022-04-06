let hola = document.getElementById('hola');
hola.innerHTML = 'Hola Bienvenido a la manipulacion del DOM';


// Definimos el boton de guardar con el elemento buscado por id
const btnGuardar = document.getElementById('guardar');
// Definimos el input value buscando por id con query selector
const inputValue = document.querySelector('#input-1');
// Definimos un array vacio;
let arr = [];

//Definimos un elemento contenedor para las listas
let container = document.getElementById('lista');

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
  container.innerHTML = '';
  arr.forEach((el, index)=>{
    container.innerHTML += `
      <li id="${index}">
        ${el}
      </li>
      <button onClick="borrarElemento(${index})">🗑️</button>
  `;
  });

}


function getElements(){
  let localS = localStorage.getItem('lista-pokemon');

   arr = localS.split(',');
}

getElements();


//  Retomando el ejercicio anterior, agregar un boton de eliminar a cada elemento de la lista de nombres y que actualice la interfaz y el local storage


function borrarElemento(i){
  arr.splice(i, 1)
  localStorage.setItem('lista-pokemon', arr);
  renderElement();
};