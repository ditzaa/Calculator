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