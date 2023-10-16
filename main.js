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

//buttons are ordered left to right, bottom to top 
let idOfButton = 'button0';
index = 0;

for(i=0; i<4; i++){
    const rowButtonsContainer = document.createElement('div');
    rowButtonsContainer.classList.add('row-container');
    buttonsContainer.appendChild(rowButtonsContainer);

    
    for(j=0; j<4; j++){
        const calculatorButton = document.createElement('div');
        calculatorButton.classList.add('calculator-button');
        calculatorButton.setAttribute('id', idOfButton);
        index++;
        idOfButton = 'button' + index.toString();
        rowButtonsContainer.appendChild(calculatorButton);
    }
}

//add text to buttons
let textToButtons = '0'