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


/* * agregar 3 botones:
    * TODO 1: El primero agrega un h1 al documento
    * TODO 2: El segundo agrega un parrafo al documento
    * TODO 3: El tercero ejecutara un alert con un mensaje
*/

const btn1 = document.getElementById('boton1');
const btn2 = document.getElementById('boton2');
const btn3 = document.getElementById('boton3');
const demo = document.getElementById('demo');

btn1.addEventListener('click', ()=>{
  demo.innerHTML += `<h1>Soy un Encabezado desde Event Listener</h1>`;
});

btn2.addEventListener('click', ()=>{
  demo.innerHTML += `<p>Soy un parrafo desde Event Listener</p>`;
});

btn3.addEventListener('click', ()=>{
  alert('Soy una alerta desde Event Listener');
});





