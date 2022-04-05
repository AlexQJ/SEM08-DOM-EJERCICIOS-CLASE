let hola = document.getElementById('hola');
hola.innerHTML = 'Hola Bienvenido a la manipulacion del DOM';


/* *
    TODO: Agrega un div y 3 botones html y cada boton tendra su evento:
    TODO 1: El primero cambiara el fondo del div a rojo
    TODO 2: El segundo cambiara el tamaño al div
    TODO 3: El tercero le asignara un borde al div
 */

    const resultado = document.getElementById('resultado');
    const btn1 = document.getElementById('btn-1');
    const btn2 = document.getElementById('btn-2');
    const btn3 = document.getElementById('btn-3');

    btn1.addEventListener('click',()=>{
      if(resultado.style.background === ""){
        resultado.style.background = "red";
      }else if(resultado.style.background === "red"){
        resultado.style.background = "";
      }
    
    });

    btn2.addEventListener('click',()=>{
      resultado.style.width = "200px";
      resultado.style.height = "200px";
      resultado.textContent = '';
      resultado.style.borderRadius = "50%";
    });

    btn3.addEventListener('click',()=>{
      resultado.style.border = "35px solid green";
    });