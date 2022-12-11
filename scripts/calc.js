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
let number_1;
let operation = "default";        //the operation method used in the calculation
let registed_equal = true;
//                                  change display functions
function clear_display(){
    document.querySelector(".h11").value = "";
}
function clear_space(){
    document.querySelector(".h11").value = "";
    document.querySelector(".h2").textContent = "";
    number_1 = 0;
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
    number_1 = read_display();
    insert_history(number_1);
    // setnumber_1(read_display());
    // set_history(getnumber_1());
    clear_display();
}
function back_space(){
    num = document.querySelector(".h11").value
    num = num.substring(0, num.length - 1);
    set_display(num);
}
//                                      LOGIK
function check_if_non_NAN(){
    x = read_display();
    if(x !== x) {return false;}
    else {return true;}
}
function take_opperation(opp){
    operation = opp;
    if( check_if_non_NAN()){
        save_display();
    }
    }
function calculate(number_1,number_2,operation){
    switch(operation){
        case "default":
            return number_2;
        case "times":
            insert_history("*");
            return operate("multiply", number_1, number_2);
        case "divi":
            insert_history("/");
            return operate("divide", number_1, number_2);
        case "minus":
            insert_history("-");
            return operate("subtract", number_1, number_2);
        case "plus":
            insert_history("+");
            return operate("add", number_1, number_2);
    }
}
function equals(){
    let number_2 = read_display();
    if(operation== "divi" && number_2 == 0 ){
        set_display("Mathmatical Error!");
        set_history("");
        return 0;
    }
    if(check_if_non_NAN()){
        res = calculate(number_1,number_2,operation);
        insert_history(read_display());
        if(registed_equal){
            insert_history("=");
        }
        set_display(res);
        number_1 = res;
    }
    else{
        set_display("")
    }
}
//                              setters and getters
//either i dont know how to implement them in js or they just dont work!!
function get_number_1(){
    return this.number_1;
}
function set_number_1(number){
    number_1 = number;
}
