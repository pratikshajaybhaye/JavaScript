
//Addition od Two values
const resultvalue = document.querySelector("#resultValue");

const additionButton = document.querySelector('#addition');
const fieldOne = document.querySelector('#inputOne');
const fieldTwo = document.querySelector('#inputTwo')
additionButton.addEventListener('click',()=>{
    const valueOne = + fieldOne.value;
    const valueTwo = + fieldTwo.value;
console.log(valueOne + valueTwo);
const result = valueOne + valueTwo
resultvalue.innerHTML = result;
});

//Substraction of Two Values
const resultsvalue = document.querySelector("#resultValue");

const substractButton = document.querySelector('#substract');
const fOne = document.querySelector('#inputOne');
const fTwo = document.querySelector('#inputTwo');
substractButton.addEventListener('click',()=>{
    const value1 = - fOne.value;
    const value2 = - fTwo.value;
console.log(value2 - value1);
const result1 = value2 - value1
resultsvalue.innerHTML = result1;
});

//Multiplication of Two Values

const resultVal = document.querySelector('#resultValue');

const multiplyButton = document.querySelector('#multiply')
const inputO = document.querySelector('#inputOne');
const inputT = document.querySelector('#inputTwo');
multiplyButton.addEventListener('click', ()=>{
    const val1 = inputO.value;
    const val2 = inputT.value;
    console.log(val1 * val2);
    const res = val1 * val2
    resultVal.innerHTML = res;
});

//Division of Two Values

const resultValues = document.querySelector('#resultValue');

const divisonButton = document.querySelector('#division')
const oneValue  = document.querySelector('#inputOne');
const twoValue = document.querySelector('#inputTwo');
divisonButton.addEventListener('click', ()=>{
    const valuesOne = oneValue.value;
    const valuesTwo = twoValue.value;
    console.log(valuesOne / valuesTwo);
    const results = valuesOne / valuesTwo
    resultValues.innerHTML = results;
});
