function add(x, y){
    return +x + +y
}

function subtract(x, y){
    return +x - +y
}

function multiply(x, y){
    return +x * +y
}

function divide(x, y){
    if (y == 0){
        alert("Can not divide by 0")
        return
    }
    return +x / +y
}

let firstOrSecond = true;

let firstOperand = "";
let operation = "";
let secondOperand = "";

const screen = document.querySelector(".scrnNumber");
let previous;

function operate(operand1, operation, operand2){
    if (operand2 === ""){
        return operand1;
    }
    if (operation === "="){
        return operand1;
    }
    if (operation === "+"){
        return add(operand1, operand2);
    }else if (operation === "-"){
        return subtract(operand1, operand2);
    }else if (operation === "x"){
        return multiply(operand1, operand2);
    }else if (operation === "/"){
        return divide(operand1, operand2);
    }
}


function updateSecondVariable(event){
    operation = event.target.firstElementChild.innerText;
    firstOperand = operate(firstOperand, previous, secondOperand);
    secondOperand = "";
    if (operation === "="){
        screen.textContent = firstOperand;
        firstOrSecond = true;
        firstOperand = "";
        operation = "";
        secondOperand = "";
        previous = "";
        return
        }
    previous = operation;
    screen.textContent = operation;
    firstOrSecond = false;
    
}

function isDigitCharCode(char) {
  const code = char.charCodeAt(0);
  return code >= 48 && code <= 57;
}

const numbers = document.querySelectorAll(".digits");
const clear = document.querySelector(".ca");

clear.addEventListener("click", () => {
    screen.textContent = "";
    firstOperand = '';
    operation = '';
    secondOperand = '';
    firstOrSecond = true;
});

function updateVariables(event){
    if (firstOrSecond){
        if (firstOperand == "" && event.target.firstElementChild.textContent == 0){
            return
        }
        firstOperand += event.target.firstElementChild.textContent;
        screen.textContent = firstOperand;
    }else{
        secondOperand += event.target.firstElementChild.textContent;
        screen.textContent = secondOperand;
    }
}


numbers.forEach(element => {
    element.addEventListener("click", updateVariables);
});

const operators = document.querySelectorAll(".operation");

operators.forEach(element => {
    element.addEventListener("click", updateSecondVariable)
})


