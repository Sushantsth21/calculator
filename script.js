function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b, operator){
    if (operator == "+"){
        return add(a,b);
    }else if(operator == "-"){
        return subtract(a,b);
    }else if(operator == "*"){
        return multiply(a,b);
    }else if(operator == "/"){
        return divide(a,b);
    }
}

function parse(array){

    for(let i = 0;i < array.length; i++){
        if(array[i] == "+" || array[i] == "-" || array[i] == "/" || array[i] == "*" || array[i] == "="){
            op = array[i];
            s_first = array.slice(0, i);
            s_second = array.slice(i+1, array.length);
        }
    }
    for(let j = 0;j < s_first.length; j++){
        first = (10**j)*first + s_first[j];
    }
    for(let k = 0;k < s_second.length; k++){
        second = (10**k)*second + s_second[k];
    }
}

function cont_op(arr){
    parse(arr);
    result = operate(first,second,op);
    first = 0;
    second = 0;
    main = [result];
        
    
            
}

function display_main(){
    for(let j = 0;j < d_main.length; j++){
        d_main = (10**j)*d_main + d_main[j];

    }
}



// first = (10**i)*first + array[i];
let split = [];
let s_first = [];
let s_second = [];
let main = [];
let second = 0;
let first = 0;
let op = "";
let result = 0;
let d_main = [];
let count = 0;

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
  main.push(1);
  d_main.push(1);
  display.textContent = d_main.join('');
  
});

two.addEventListener("click", () => {
    main.push(2);
    d_main.push(2);
    display.textContent = d_main.join('');
});

three.addEventListener("click", () => {
    main.push(3);
    d_main.push(3);
    display.textContent = d_main.join('');
});

four.addEventListener("click", () => {
    main.push(4);
    d_main.push(4);
    display.textContent = d_main.join('');
});

five.addEventListener("click", () => {
    main.push(5);
    d_main.push(5);
    display.textContent = d_main.join('');
});

six.addEventListener("click", () => {
    main.push(6);
    d_main.push(6);
    display.textContent = d_main.join('');
});

seven.addEventListener("click", () => {
    main.push(7);
    d_main.push(7);
    display.textContent = d_main.join('');
});

eight.addEventListener("click", () => {
    main.push(8);
    d_main.push(8);
    display.textContent = d_main.join('');
});

nine.addEventListener("click", () => {
    main.push(9);
    d_main.push(9);
    display.textContent = d_main.join('');  
});

zero.addEventListener("click", () => {
    main.push(0);
    d_main.push(0);
    display.textContent = d_main.join('');  
});

minus.addEventListener("click", () => {
    if (count > 1){
        cont_op(main);
    }
    main.push("-");
    d_main = [];
    display.innerHTML = "";
});

mult.addEventListener("click", () => {
    cont_op(main);
    main.push("*");
    d_main = [];
    display.innerHTML = "";
});

div.addEventListener("click", () => {
    cont_op(main);
    main.push("/");
    d_main = [];
    display.innerHTML = "";
});


plus.addEventListener("click", () => {
    cont_op(main);
    main.push("+");
    d_main = [];
    display.innerHTML = "";
});

equals.addEventListener("click", () => {
    parse(main);
    result = operate(first,second,op);
    display.textContent = result;
});

clear.addEventListener("click", () => {
    main = [];
    d_main= [];
    first = 0;
    second = 0;
    op ="";
    display.innerHTML = "";
});

