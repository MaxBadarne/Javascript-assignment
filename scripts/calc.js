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
        case "subtract":
            return parseInt(firstnum)-parseInt(secnum);
        case "multiply":
            return parseInt(firstnum)*parseInt(secnum);
        case "divide":
            return firstnum/secnum;
    }
}
let num1;
let opr = "default";        //the operation method used in the calculation
let registed_equal = true;
//change display functions
function clear_display(){
    document.querySelector(".h11").value = "";
}
function clear_space(){
    document.querySelector(".h11").value = "";
    document.querySelector(".h2").textContent = "";
}
function insert_display(num){
    document.querySelector(".h11").value = document.querySelector(".h11").value + num;
}
function read_display(){
    value = document.querySelector(".h11").value;
    value.trim();
    value = parseInt(value)
    return value;
}
function set_display(num){
    document.querySelector(".h11").value = num;
}
function set_history(num){
    document.querySelector(".h2").textContent = num;
}
function insert_history(num){
    document.querySelector(".h2").textContent =document.querySelector(".h2").textContent +num;
}
function save_display(){
    num1 = read_display();
    insert_history(num1);
    // setnum1(read_display());
    // set_history(getnum1());
    clear_display();
}
// LOGIK
//TODO error messege when dividing by zero
function check_if_non_NAN(){
    x = read_display();
    if(x !== x) {return false;}
    else {return true;}
}
function take_opperation(opp){
    opr = opp;
    if( check_if_non_NAN()){
        save_display();
    }
    }
function calculate(num1,num2,opr){
    switch(opr){
        case "default":
            return num2;
        case "times":
            insert_history("*");
            return operate("multiply", num1, num2);
        case "divi":
            insert_history("/");
            return operate("divide", num1, num2);
        case "minus":
            insert_history("-");
            return operate("subtract", num1, num2);
        case "plus":
            insert_history("+");
            return operate("add", num1, num2);
    }
}
function equals(){
    let num2 = read_display();
    if(check_if_non_NAN()){
        res = calculate(num1,num2,opr);
        insert_history(read_display());
        if(registed_equal){
            insert_history("=");
        }
        set_display(res);
        num1 = res;
    }
    else{
        set_display("")
    }
}
//setters and getters
//either i dont know how to implement them in js or they just dont work!!
function get_num1(){
    return this.num1;
}
function set_num1(number){
    num1 = number;
}
