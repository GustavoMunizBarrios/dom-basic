const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const btn2 = document.querySelector('#btnCalcular2');
const pResult = document.querySelector('#result');
const pResult2 = document.querySelector('#result2');

//Con addEventListener tenemos que darle dos argumentos, elprimero es el nombre del evento y el segundo es el código JS 
btn.addEventListener('click', btnOnClick);
btn2.addEventListener('click', btnOnClick2);

function btnOnClick() {
    const concatenacion = input1.value + input2.value;
    pResult.innerText = "Resultado de concatenación: " + concatenacion;


    console.log('Escuchando el evento de click concatenación.');
    // diferencias entre Number y parseInt: https://thisthat.dev/number-constructor-vs-parse-int/
}
function btnOnClick2() {
    
    const suma = Number(input1.value) + Number(input2.value);
    pResult2.innerText = "Resultado de suma: " + suma;
    console.log('Escuchando el evento de click suma.');
}