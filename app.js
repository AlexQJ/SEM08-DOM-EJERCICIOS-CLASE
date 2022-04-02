let hola = document.getElementById('hola');
hola.innerHTML = 'Hola Bienvenido a la manipulacion del DOM';

// definimos el boton de guardar con el elemento buscando por id
const botonGuardar = document.getElementById('guardar')
// definimos el inputValue buscando por su id 
const inputValue = document.querySelector('#input-1')
// definimos un array vacio
let arr = []

// creamos un add eventListener que escuchara el click del boton guardad
botonGuardar.addEventListener('click', () => {
  // agrega el valor del input al final del arreglo arr
  arr.push(inputValue.value)
  // lo guardamos en localStorage con la llave lista-pokemon y el valor es el arrego arr
  localStorage.setItem('lista-pokemon', arr)
  //imprimimos en consola el arreglo actualizado
  console.log(arr)
  //limpiamos el valor del input
  inputValue.value = ''
  renderElement(arr)
})

function renderElement() {
  let container = document.getElementById('lista')
  console.log(arr)
  container.innerHTML = '';
  arr.forEach(function (el) {
    container.innerHTML += `
    <li>
      ${el}
    </li>
  `;
  })
}


function getElements() {
  let localS = localStorage.getItem('lista-pokemon')
  arr = localS.split(',')
  renderElement()
}
getElements()




