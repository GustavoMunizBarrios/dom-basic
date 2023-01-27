const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const pResult2 = document.querySelector('#result2');

function btnOnClick() {
    const concatenacion = input1.value + input2.value;
    pResult.innerText = "Resultado de concatenación: " + concatenacion;

    const suma = Number(input1.value) + Number(input2.value);
    pResult2.innerText = "Resultado de suma: " + suma;

    console.log('Escuchando el evento de click');
    // diferencias entre Number y parseInt: https://thisthat.dev/number-constructor-vs-parse-int/
}