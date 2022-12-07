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
let num1; 
let opr;
function savenum1(){
    num1 = readdisplay();
    cleardisp();
}
//best part, LOGIK
/* so there should be a waiting period
the function will have to stop at some point after taking the display number and the perator
*/
function takeopp(opp){
    savenum1();
    opr = opp;
    cleardisp();
}
function equals(){
    num2 = readdisplay();
    switch(opr){
        case "times":
            res = multiply(num1,num2);
            break;
        case "divi":
            res = divide(num1,num2);
                break;
        case "minus":
            res = subtract(num1,num2);
            break;
        case "plus":
            res = add(num1,num2);
            break;
    }
    setdisp(res)
}
