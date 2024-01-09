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
// first = (10**i)*first + array[i];
let split = [];
let s_first = [];
let s_second = [];
let main = [];
let second = 0;
let first = 0;
let op = "";

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
 
one.addEventListener("click", () => {
  main.push(1);
  console.log("inside:", main);
});

two.addEventListener("click", () => {
    main.push(2);
    console.log("inside:", main);
});

three.addEventListener("click", () => {
    main.push(3);
    console.log("inside:", main);
});

four.addEventListener("click", () => {
    main.push(4);
    console.log("inside:", main);
});

five.addEventListener("click", () => {
    main.push(5);
    console.log("inside:", main);
});

six.addEventListener("click", () => {
    main.push(6);
    console.log("inside:", main);
});

seven.addEventListener("click", () => {
    main.push(7);
    console.log("inside:", main);
});

eight.addEventListener("click", () => {
    main.push(8);
    console.log("inside:", main);
});

nine.addEventListener("click", () => {
    main.push(9);
    console.log("inside:", main);
});

minus.addEventListener("click", () => {
    main.push("-");
    console.log("inside:", main);
});

mult.addEventListener("click", () => {
    main.push("*");
    console.log("inside:", main);
});

div.addEventListener("click", () => {
    main.push("/");
    console.log("inside:", main);
});


plus.addEventListener("click", () => {
    main.push("+");
    console.log("inside:", main);
});

equals.addEventListener("click", () => {
    // main.push(1);
    // console.log("inside:", main);
    parse(main);
    console.log(first);
    console.log(second);
    console.log(op);
});

clear.addEventListener("click", () => {
    main = [];
    console.log("inside:", main);
});



console.log(first);
console.log(second);
console.log(op);