let firstNumber = '';
let secondNumber = '';
let operator = '';
let notAllowed = false;
let isFloating = false;
let numberSign = '+';
let idOfButton = 'button0';
let index = 0;
let displayValue = 0;
let startedOperation = false;

//functions for calculus
function add(a, b){
    return +a + +b;
}

function subtract(a, b){
    return +a - +b;
}

function multiply(a, b){
    return +a* (+b);
}

function divide(a, b){
    if(b == 0){
        notAllowed = true;
        return 'You cannot divide by 0! Please clear the display!';
    }
    else{
        return +a/ (+b);
    }
}

function operate(firstNumber, secondNumber, operator){
    if(operator == '+'){
        return add(firstNumber, secondNumber);
    }

    if(operator == '-'){
        return subtract(firstNumber, secondNumber);
    }

    if(operator == '*'){
        return multiply(firstNumber, secondNumber);
    }

    if(operator == '/'){
        return divide(firstNumber, secondNumber);
    }
}

const mainContainer = document.querySelector('#calculator-div');
const buttonsContainer = document.querySelector('#buttons-container');
const numbersDisplay = document.getElementById('numbers-container');
const upperNumbersDisplay = document.getElementById('upper-numbers-container');

//buttons are ordered left to right, top to bottom 
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

//function to set first and second number
function setNumbers(){
    firstNumber = upperNumbersDisplay.textContent.slice(0, -1);
    secondNumber = numbersDisplay.textContent;
    return 0;
}

//add text to buttons + display numbers on click + make them work
let content = document.getElementById('button0');
content.textContent = '7';
content.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18 && notAllowed === false){
        numbersDisplay.textContent = numbersDisplay.textContent + content.textContent;
        displayValue = numbersDisplay.textContent;
    }
})

let content1 = document.getElementById('button1');
content1.textContent = '8';
content1.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18 && notAllowed === false){
        numbersDisplay.textContent = numbersDisplay.textContent + content1.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})

let content2 = document.getElementById('button2');
content2.textContent = '9';
content2.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18 && notAllowed === false){
        numbersDisplay.textContent = numbersDisplay.textContent + content2.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})


let content3 = document.getElementById('button3');
content3.textContent = '/';
content3.addEventListener('click', () =>{
    if(notAllowed === false){
        if(startedOperation == false){
            upperNumbersDisplay.textContent = numbersDisplay.textContent + '/';
            numbersDisplay.textContent = '';
            operator = '/';
            startedOperation = true;
        }else if(startedOperation == true){
            setNumbers();
            upperNumbersDisplay.textContent = operate(firstNumber, secondNumber, operator) + '/';
            numbersDisplay.textContent = '';
            operator = '/';
        }

        if(upperNumbersDisplay.textContent.search('Please clear') != -1){
            upperNumbersDisplay.textContent = upperNumbersDisplay.textContent.slice(0, -1);
            notAllowed = true;
        }
        isFloating = false; 
        numberSign = '+';
    }
})

let content4 = document.getElementById('button4');
content4.textContent = '4';
content4.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18 && notAllowed === false){
        numbersDisplay.textContent = numbersDisplay.textContent + content4.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})

let content5 = document.getElementById('button5');
content5.textContent = '5';
content5.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18 && notAllowed === false){
        numbersDisplay.textContent = numbersDisplay.textContent + content5.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})


let content6 = document.getElementById('button6');
content6.textContent = '6';
content6.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18 && notAllowed === false){
        numbersDisplay.textContent = numbersDisplay.textContent + content6.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})

let content7 = document.getElementById('button7');
content7.textContent = '*';
content7.addEventListener('click', () =>{
    if(notAllowed == false){
        if(startedOperation == false){
            upperNumbersDisplay.textContent = numbersDisplay.textContent + '*';
            numbersDisplay.textContent = '';
            operator = '*';
            startedOperation = true;
        }else if(startedOperation == true){
            setNumbers();
            upperNumbersDisplay.textContent = operate(firstNumber, secondNumber, operator) + '*';
            numbersDisplay.textContent = '';
            operator = '*';
            if(upperNumbersDisplay.textContent.indexOf('Please clear') != -1){
                upperNumbersDisplay.textContent = upperNumbersDisplay.textContent.slice(0, -1);
            }
        }
        isFloating = false; 
        numberSign = '+';
    }
   
})

let content8 = document.getElementById('button8');
content8.textContent = '1';
content8.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18 && notAllowed === false){
        numbersDisplay.textContent = numbersDisplay.textContent + content8.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})

let content9 = document.getElementById('button9');
content9.textContent = '2';
content9.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18 && notAllowed === false){
        numbersDisplay.textContent = numbersDisplay.textContent + content9.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})

let content10 = document.getElementById('button10');
content10.textContent = '3';
content10.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18 && notAllowed === false){
        numbersDisplay.textContent = numbersDisplay.textContent + content10.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})

let content11 = document.getElementById('button11');
content11.textContent = '-';
content11.addEventListener('click', () =>{
    if(notAllowed == false){
        if(startedOperation == false){
            upperNumbersDisplay.textContent = numbersDisplay.textContent + '-';
            numbersDisplay.textContent = '';
            operator = '-';
            startedOperation = true;
        }else if(startedOperation == true){
            setNumbers();
            upperNumbersDisplay.textContent = operate(firstNumber, secondNumber, operator) + '-';
            numbersDisplay.textContent = '';
            operator = '-';
            if(upperNumbersDisplay.textContent.indexOf('Please clear') != -1){
                upperNumbersDisplay.textContent = upperNumbersDisplay.textContent.slice(0, -1);
            }
        }
        isFloating = false; 
        numberSign = '+';
    }
  
      
})

let content12 = document.getElementById('button12');
content12.textContent = '0';
content12.addEventListener('click', () =>{
    if(numbersDisplay.textContent.length <18 && notAllowed === false
        && numbersDisplay.textContent != '0'){
        numbersDisplay.textContent = numbersDisplay.textContent + content12.textContent;
        displayValue = numbersDisplay.textContent;
    } 
})

let content13 = document.getElementById('button13');
content13.textContent = '.';
content13.addEventListener('click', () =>{
    if(notAllowed == false){
        if(isFloating == false){
            numbersDisplay.textContent = numbersDisplay.textContent + '.';
            isFloating = true; 
        }   
    }  
})

let content14 = document.getElementById('button14');
content14.textContent = '+';
content14.addEventListener('click', () =>{
    if(notAllowed == false){
        if(startedOperation == false){
            upperNumbersDisplay.textContent = numbersDisplay.textContent + '+';
            numbersDisplay.textContent = '';
            operator = '+';
            startedOperation = true;
        }else if(startedOperation == true){
            setNumbers();
            upperNumbersDisplay.textContent = operate(firstNumber, secondNumber, operator) + '+';
            numbersDisplay.textContent = '';
            operator = '+';
            if(upperNumbersDisplay.textContent.indexOf('Please clear') != -1){
                upperNumbersDisplay.textContent = upperNumbersDisplay.textContent.slice(0, -1);
            }
        }
        isFloating = false; 
        numberSign = '+';
    }
    
})

let content15 = document.getElementById('button15');
content15.textContent = '=';
content15.addEventListener('click', () =>{
    if(startedOperation == true){
        setNumbers();
        numbersDisplay.textContent = operate(firstNumber, secondNumber, operator);
        upperNumbersDisplay.textContent = '';
        operator = '';
        startedOperation = false;
    } 
})

const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () =>{
    firstNumber = '';
    secondNumber = '';
    numbersDisplay.textContent = ''
    upperNumbersDisplay.textContent = '';
    operator = '';
    startedOperation = false;
    notAllowed = false;
    numberSign = '+';
    isFloating = false;
})

const backspaceButton = document.getElementById('backspace-button');
backspaceButton.addEventListener('click', () =>{
    if(notAllowed == false){
        numbersDisplay.textContent = numbersDisplay.textContent.slice(0, -1);
    }
   
})

const signButton = document.getElementById('sign-button');
signButton.addEventListener('click', () =>{
    if(notAllowed==false){
       if(numberSign == '+'){
        numberSign = '-';
        if(numbersDisplay.textContent == ''){
            numbersDisplay.textContent = '-';

        }else{
            numbersDisplay.textContent = '-' + numbersDisplay.textContent;
        }
        }

        else if(numberSign == '-'){
            numberSign = '+';
            numbersDisplay.textContent = numbersDisplay.textContent.substring(1);
        }
    }
    
})