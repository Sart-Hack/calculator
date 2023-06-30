const add = function(operand1, operand2){
    return operand1 + operand2
};


const subtract = function(operand1, operand2){
    return operand1 - operand2;
};

const multiply = function(operand1, operand2){
    return operand1 * operand2;
};

const divide = function(operand1, operand2){
    return operand1 / operand2
};

let operand1;
let operand2;
let operator;
let result;

const operate = function(operand1, operand2, operator){
    switch(operator){
        case '+':
            return add(operand1, operand2);
            break;
        case '-':
            return subtract(operand1, operand2);
            break;
        case '*':
            return multiply(operand1, operand2);
            break;
        case '/':
            return divide(operand1, operand2);
            break;
    }
}


const calcDisplay = document.querySelector('#calc-display')

// const button9 = document.querySelector('#button9');
// const button8 = document.querySelector('#button8');
// const button7 = document.querySelector('#button7');
// const button6 = document.querySelector('#button6');
// const button5 = document.querySelector('#button5');
// const button4 = document.querySelector('#button4');
// const button3 = document.querySelector('#button3');
// const button2 = document.querySelector('#button2');
// const button1 = document.querySelector('#button1');
// const button0 = document.querySelector('#button0');

const btnsNum = document.querySelectorAll('button.num');
const btnsOperator = document.querySelectorAll('button.operator');
const btnEquals = document.querySelector('#buttonEquals');
const btnCLR = document.querySelector('#buttonCLR');


btnsNum.forEach(button => {
    button.addEventListener('click', () =>{
        const buttonText = button.textContent;
        calcDisplay.value += buttonText;
    })
})

btnsOperator.forEach(button => {
    button.addEventListener('click', () =>{
        operand1 = Number(calcDisplay.value);
        const buttonText = button.textContent;
        calcDisplay.value = buttonText;
        operator = buttonText;
    })
})

btnEquals.addEventListener('click', () => {
    operand2 = Number(calcDisplay.value);
    result = operate(operand1, operand2, operator);
    calcDisplay.value = result;
    operand1 = result;
    operand2 = 0;
    operator = 0;
})

btnCLR.addEventListener('click', () => {
    calcDisplay.value = "";

})


