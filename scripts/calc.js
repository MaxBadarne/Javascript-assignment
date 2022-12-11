//basic math functions
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
function operate(oper,firstnum,secnum){
    switch(oper){
        case "add":
            return parseInt(firstnum)+parseInt(secnum);
            inserth("love in air");
        case "subtract":
            return parseInt(firstnum)-parseInt(secnum);
        case "multiply":
            return parseInt(firstnum)*parseInt(secnum);
        case "divide":
            return firstnum/secnum;
    }
}
//change display functions
function cleardisp(){
    document.querySelector(".h1").textContent = "";
}
function clearspace(){
    document.querySelector(".h1").textContent = "";
    document.querySelector(".h2").textContent = "";
}
function insert(num){
    document.querySelector(".h1").textContent =document.querySelector(".h1").textContent +num;
}
function readdisplay(){
    value = document.querySelector(".h1").textContent;
    value.trim();
    value = parseInt(value)
    return value;
}
function setdisp(num){
    document.querySelector(".h1").textContent = num;
}
function sethistory(num){
    document.querySelector(".h2").textContent = num;
}
function inserthistory(num){
    document.querySelector(".h2").textContent =document.querySelector(".h2").textContent +num;
}

// LOGIKe
//TODO when number greater than  (10) remove everything but those 10 numers (add a .)
//TODO add the operator in the history
//TODO error messege when dividing by zero
let num1;
let opr;        //the operation method used in the calculation
function savedisplay(){
    num1 = readdisplay();
    inserthistory(num1);
    // setnum1(readdisplay());
    // sethistory(getnum1());
    cleardisp();
}
function takeopp(opp){
    opr = opp;
    savedisplay();
    }
function calculate(num1,num2,opr){
    switch(opr){
        case "times":
            inserthistory("*");
            return operate("multiply", num1, num2);
        case "divi":
            inserthistory("/");
            return operate("divide", num1, num2);
        case "minus":
            inserthistory("-");
            return operate("subtract", num1, num2);
        case "plus":
            inserthistory("+");
            return operate("add", num1, num2);
    }
}
function equals(){
    let num2 = readdisplay();
    res = calculate(num1,num2,opr);
    inserthistory(readdisplay());
    // inserthistory("=");
    setdisp(res);
    num1 = res;
}
//setters and getters
//either i dont know how to implement them in js or they just dont work!!
function getnum1(){
    return this.num1;
}
function setnum1(number){
    num1 = number;
}
