//basic math functions
function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){return a/b;}
function operate(oper,firstnum,secnum){
    if(secnum < 0){secnum =secnum*-1;}
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
let count = 0;
let number_1;
let operation = "default";        //the operation method used in the calculation

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
//TODO replace the previous results with ANS maybe ?
//TODO float numbers, probably will have to disable the button after the first one
function check_if_non_NAN(){
    x = read_display();
    if(x !== x) {return false;}
    else {return true;}
}
function take_opperation(opp){
    operation = opp;
    if(check_if_non_NAN()){
        save_display();
    }
}
function calculate(number_1,number_2,operation){
    switch(operation){
        case "default": return number_2;
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
    if(count > 4){
        set_history("");
        count=0;
    }
    let number_2 = read_display();
    if(operation== "divi" && number_2 == 0 ){
        set_display(5318008);
        set_history("ERROR! \n Cannot devide by 0");
        return 0;
    }
    if(check_if_non_NAN()){
        res = calculate(number_1,number_2,operation);
        insert_history(read_display());
        insert_history("=");
        set_display(res);
        number_1 = res;
        count++;
    }
    else{set_display("")}
}
//                              setters and getters
//either i dont know how to implement them in js or they just dont work!!
function get_number_1(){
    return this.number_1;
}
function set_number_1(number){
    number_1 = number;
}
//                              Key listener
function key_pressed(E){
    if (E.code =="Space") {
        equals();
    }
    if (E.code =="NumpadMultiply") { //  *
        take_opperation('times');
        back_space();
    }
    if (E.code =="NumpadDivide") {     // /
        take_opperation('divi'); 
        back_space();
    }
    if (E.code =="NumpadSubtract") { // - 
        take_opperation('minus');
        clear_display();
    }
    if (E.code =="NumpadAdd") { //  +
        take_opperation('plus');
        back_space();
    }
}