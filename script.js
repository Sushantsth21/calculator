let input = [];
let operator = null;
let result = 0;
let dis = 0;

function addDigit(digit){
    input.push(digit);
}

function addOperator(op){
    if (operator){
        calculate();
    }
    operator = op;
    result = parseNumber(input);
    input = [];
}

function calculate(){
    let secondNumber = parseNumber(input);
    switch(operator){
        case '+':
            result += secondNumber;
            break;
        case '-':
            result -= secondNumber;
            break;
        case '*':
            result *= secondNumber;
            break;
        case '/':
            result /= secondNumber;
            break;
    }
    input = [result];
    operator = null;
    updateDisplay();
}

function parseNumber(digits){
    return parseInt(digits.join(''));
}

function updateDisplay(){
    display.textContent = result;
}

function update(){
    dis = parseNumber(input);
    display.textContent = dis;
}

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const mult = document.getElementById("multiply");
const div = document.getElementById("divide");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const display = document.getElementById("display")

 
one.addEventListener("click", () => {
    addDigit(1);
    update();
});

two.addEventListener("click", () => {
    addDigit(2);
    update();
});

three.addEventListener("click", () => {
    addDigit(3);
    update();
});

four.addEventListener("click", () => {
    addDigit(4);
    update();
});

five.addEventListener("click", () => {
    addDigit(5);
    update();
});

six.addEventListener("click", () => {
    addDigit(6);
    update();
});

seven.addEventListener("click", () => {
    addDigit(7);
    update();
});

eight.addEventListener("click", () => {
    addDigit(8);
    update();
});

nine.addEventListener("click", () => {
    addDigit(9);
    update();
});

zero.addEventListener("click", () => {
    addDigit(0);
    update();
});

minus.addEventListener("click", () => addOperator('-'));

mult.addEventListener("click", () => addOperator('*'));

div.addEventListener("click", () => addOperator('/'));

plus.addEventListener("click", () => addOperator('+'));

equals.addEventListener("click", () => {
    calculate();
    updateDisplay();
});

clear.addEventListener("click", () => {
    input = [];
    operator = null;
    result = 0;
    display.innerHTML = '';
});

