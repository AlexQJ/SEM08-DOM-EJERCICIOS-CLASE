let hola = document.getElementById('hola');
hola.innerHTML = `
  <h1>Hola Bienvenido a la manipulacion del DOM</h1>
  <p>Holi</p>
`;

// let p1 = document.createElement('p');
// let texto = document.createTextNode('holi')
// p1.appendChild(texto)
// document.getElementById('hola').appendChild(p1)

// let boton1 = document.getElementById('boton1')

// boton1.addEventListener('click', (ev) => {
//   console.log('evento', ev)
// })

// function myFunction() {
//   console.log('evento')
// }
function agregaEncabezado() {
  document.getElementById('encabezado').innerHTML = '<h1>Encabezado</h1>';
}

let btnParrafo = document.getElementById('boton2')
btnParrafo.addEventListener('click', function () {
  document.getElementById('parrafo').innerHTML = '<p>Parrafo</p>';
})


function mensaje() {
  let mensaje = prompt('Teclea el mensaje a visualizar.');
  alert(mensaje);
}




