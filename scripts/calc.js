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
function clear(){
    document.querySelector(".h1").textContent = "  ";
}
function insert(num){
    document.querySelector(".h1").textContent =document.querySelector(".h1").textContent +num;
}
function readdisplay(){
    value = document.querySelector(".h1").textContent;
    return value;
}
