function add(a, b){
    return +a + +b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    if(b == 0){
        return 'NOT ALLOWED';
    }
    else{
        return a/b;
    }
}

let firstNumber = '';
let secondNumber = '';
let operator = '';
let currentValue;

function operate(firstNumber, secondNumber, operator){
    if(operator == '+'){
        return add(firstNumber, secondNumber);
    }
}

const mainContainer = document.querySelector('#calculator-div');
const buttonsContainer = document.querySelector('#buttons-container');
const numbersDisplay = document.getElementById('numbers-container');
const upperNumbersDisplay = document.getElementById('upper-numbers-container');

//buttons are ordered left to right, top to bottom 
let idOfButton = 'button0';
index = 0;

for(i=0; i<4; i++){
    const rowButtonsContainer = document.createElement('div');
    rowButtonsContainer.classList.add('row-container');
    buttonsContainer.appendChild(rowButtonsContainer);

    
    for(j=0; j<4; j++){
        let calculatorButton = document.createElement('button');
        calculatorButton.classList.add('calculator-button');
        calculatorButton.setAttribute('id', idOfButton);
        index++;
        idOfButton = 'button' + index.toString();
        rowButtonsContainer.appendChild(calculatorButton);
    }
}

//add text to buttons + display numbers on click
let displayValue = 0;

let content = document.getElementById('button0');
content.textContent = '7';
content.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18){
        numbersDisplay.textContent = numbersDisplay.textContent + content.textContent;
        displayValue = numbersDisplay.textContent;
    }
})

let content1 = document.getElementById('button1');
content1.textContent = '8';
content1.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18){
        numbersDisplay.textContent = numbersDisplay.textContent + content1.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})

let content2 = document.getElementById('button2');
content2.textContent = '9';
content2.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18){
        numbersDisplay.textContent = numbersDisplay.textContent + content2.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})


let content3 = document.getElementById('button3');
content3.textContent = '/';

let content4 = document.getElementById('button4');
content4.textContent = '4';
content4.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18){
        numbersDisplay.textContent = numbersDisplay.textContent + content4.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})

let content5 = document.getElementById('button5');
content5.textContent = '5';
content5.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18){
        numbersDisplay.textContent = numbersDisplay.textContent + content5.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})


let content6 = document.getElementById('button6');
content6.textContent = '6';
content6.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18){
        numbersDisplay.textContent = numbersDisplay.textContent + content6.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})

let content7 = document.getElementById('button7');
content7.textContent = '*';

let content8 = document.getElementById('button8');
content8.textContent = '1';
content8.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18){
        numbersDisplay.textContent = numbersDisplay.textContent + content8.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})

let content9 = document.getElementById('button9');
content9.textContent = '2';
content9.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18){
        numbersDisplay.textContent = numbersDisplay.textContent + content9.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})

let content10 = document.getElementById('button10');
content10.textContent = '3';
content10.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18){
        numbersDisplay.textContent = numbersDisplay.textContent + content10.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})

let content11 = document.getElementById('button11');
content11.textContent = '-';

let content12 = document.getElementById('button12');
content12.textContent = '0';
content12.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18){
        numbersDisplay.textContent = numbersDisplay.textContent + content12.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})

let content13 = document.getElementById('button13');
content13.textContent = '.';

let content14 = document.getElementById('button14');
content14.textContent = '+';
content14.addEventListener('click', () =>{
    if(operator == ''){
        numbersDisplay.textContent = '';
        firstNumber = displayValue;
        upperNumbersDisplay.textContent = displayValue + '+';
        operator = '+';

    }
})

let content15 = document.getElementById('button15');
content15.textContent = '=';
content15.addEventListener('click', () =>{
    secondNumber = displayValue;
    displayValue = operate(firstNumber, secondNumber, operator);
    numbersDisplay.textContent = "" + displayValue;
    upperNumbersDisplay.textContent = '';
    operator = '';
    firstNumber = '';
    secondNumber = '';
    // currentValue = displayValue;
})
