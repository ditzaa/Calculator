function add(a, b){
    return a + b;
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

let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, secondNumber, operator){
    return add(firstNumber, secondNumber);
}

const mainContainer = document.querySelector('#calculator-div');
const buttonsContainer = document.querySelector('#buttons-container');

// const rowButtonsContainer = document.createElement('div');
//     rowButtonsContainer.classList.add('row-container');
//     buttonsContainer.appendChild(rowButtonsContainer);

//buttons are ordered left to right, top to bottom 
let idOfButton = 'button0';
index = 0;

for(i=0; i<4; i++){
    const rowButtonsContainer = document.createElement('div');
    rowButtonsContainer.classList.add('row-container');
    buttonsContainer.appendChild(rowButtonsContainer);

    
    for(j=0; j<4; j++){
        let calculatorButton = document.createElement('div');
        calculatorButton.classList.add('calculator-button');
        calculatorButton.setAttribute('id', idOfButton);
        index++;
        idOfButton = 'button' + index.toString();
        rowButtonsContainer.appendChild(calculatorButton);
    }
}

//add text to buttons
// let textToButtons = '0';
let content = document.getElementById('button0');
content.textContent = '7';

let content1 = document.getElementById('button1');
content1.textContent = '8';

let content2 = document.getElementById('button2');
content2.textContent = '9';

let content3 = document.getElementById('button3');
content3.textContent = '/';

let content4 = document.getElementById('button4');
content4.textContent = '4';

let content5 = document.getElementById('button5');
content5.textContent = '5';

let content6 = document.getElementById('button6');
content6.textContent = '6';

let content7 = document.getElementById('button7');
content7.textContent = '*';

let content8 = document.getElementById('button8');
content8.textContent = '1';

let content9 = document.getElementById('button9');
content9.textContent = '2';

let content10 = document.getElementById('button10');
content10.textContent = '3';

let content11 = document.getElementById('button11');
content11.textContent = '-';

let content12 = document.getElementById('button12');
content12.textContent = '0';

let content13 = document.getElementById('button13');
content13.textContent = '.';

let content14 = document.getElementById('button14');
content14.textContent = '+';

let content15 = document.getElementById('button15');
content15.textContent = '=';