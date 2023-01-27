const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const form = document.querySelector('#form');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//Con addEventListener tenemos que darle dos argumentos, elprimero es el nombre del evento y el segundo es el código JS 
form.addEventListener('submit', concatenarInputValues);

function concatenarInputValues(event) {
    event.preventDefault();//Esto es para que no se recarge la página cuando el form realice el submit
    const concatenacion = input1.value + input2.value;
    pResult.innerText = "Resultado de concatenación: " + concatenacion;


    console.log('Escuchando el evento de click concatenación.');
    // diferencias entre Number y parseInt: https://thisthat.dev/number-constructor-vs-parse-int/
}
