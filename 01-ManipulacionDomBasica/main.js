// cuando queremos seleccionar por etiqueta usamos:
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const input = document.querySelector('input');

//Si queremos seleccionar todos los elementos de una etiqueta:
const todos_p = document.querySelectorAll('p');
//Salida: > p:[p, p.parrafito, p#pid]

//cuando queremos seleccionar por class usamos:
const parrafito = document.querySelector('.parrafito');

//cuando queremos seleccionar por ID usamos:
const pid = document.querySelector('#pid');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//innerHTML nos permite modificar elementos del HTML, también se puede
//insertar etiquetas propias de html.
//Con innerText solo se modifica el texto
h1.innerHTML = 'Hilda Gas <br> feo';
h1.innerText = 'Hilda Gas <br> feo';

//con getAttribute podemos leer los atributos de los elementos
console.log(h1.getAttribute('class')); //output: titulo

//con setAttribute podemos modificar los atributos de los elementos.
h1.setAttribute('class', 'rojo');// modificación en html: <h1 class="rojo">Hilda Gas <br> feo</h1>

//classList funciona especificamente para las clases 
//en el caso siguiente se agregará una segunda clase con add:
h1.classList.add('verde');// modificación en html: <h1 class="rojo verde">Hilda Gas <br> feo</h1>

//también se puede eliminar clases con remove:
h1.classList.remove('verde');//modificación en html: <h1 class="rojo">Hilda Gas <br> feo</h1>


//Para modificar el value del input utilizamos:
input.value = "123"; // resultado en el input: 123

//Para crear un elemento desde 0 usamos:
console.log(document.createElement('span'));//output: <span></span>

//************************************************************ */
//Insertar una imagen en el documento HTML
const imagen = document.createElement('img'); //Creamos un elemento img
imagen.setAttribute('src', 'https://www.shutterstock.com/shutterstock/photos/1436193641/display_1500/stock-vector-japanese-samurai-soldier-on-illustration-1436193641.jpg'); // Le ponemos atributos al elemento img
console.log(imagen); //output: <img src="https://www.shutterstock.com/shutterstock/photos/1436193641/display_1500/stock-vector-japanese-samurai-soldier-on-illustration-1436193641.jpg">

pid.append(imagen); //insertamos la imagen dentro de un elemento ya existente (pid es el ID de un elemento p)

//*************************************************** */
//Reemplazar un elemento por otro

/**
 * pid.innerHTML = ""; //aqui le decimos a la etiqueta p con ID de nombre pid que vacie su contenido
 * pid.append(imagen); //Luego insertamos la imagen dentro del elemento p
 */
