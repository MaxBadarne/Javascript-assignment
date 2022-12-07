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
            changetext("love in air");
        case "subtract":
            return parseInt(firstnum)-parseInt(secnum);
        case "multiply":
            return parseInt(firstnum)*parseInt(secnum);
        case "divide":
            return firstnum/secnum;
    }
}
function changetext(string){
        const display = document.getElementById("display");
        this.display.innerHTML = `<h1> ${string}</h1>`;
}
// main fuction would have changetext("000000000000");
console.log(operate("add", 5 , 6));