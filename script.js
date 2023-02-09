/* Need to figure out a way to limit amount of numbers on the screen */
/* execute total after another number is pressed */

const keys_div = document.querySelectorAll('.calcKeys');
const userInput = document.getElementById('display')
const pastInput = document.getElementById('raw-display')
const calculator_container= document.getElementById('calculator-container')
const display_container= document.getElementById('display-container')
const number_button = document.querySelectorAll('[data-number]')
const operator_button = document.querySelectorAll('[data-operator]')
const evaluate_button = document.getElementById('equal')
const clear_button = document.getElementById('clear');
const backspace_button = document.getElementById('backspace')

let firstOperand='';
let secondOperand='';
let totalKept='';
let operatorChosen= null;
let resetScreen= false;

clear_button.addEventListener('click',allClear)

number_button.forEach((button)=>{
button.addEventListener('click',()=> appendNumber(button.textContent))}
)

operator_button.forEach((button)=>{
    button.addEventListener('click',()=> setOperation(button.textContent))}
    )

function appendNumber(number){
    if (userInput.textContent ==='0'||resetScreen){
        reset();
    }
    userInput.textContent+=number
    
}

evaluate_button.addEventListener('click',()=>{
    evaluate();
})

backspace_button.addEventListener('click',()=>{
    backOne();
})

function roundNumber(number){
    return Math.round(number*1000)/1000
}


function backOne(){
   userInput.textContent=userInput.textContent
   .toString()
   .slice(0,-1)
}

function allClear(){
    userInput.textContent='0';
    pastInput.textContent='';
    firstOperand='';
    secondOperand='';
    operatorChosen=null
    
}
function reset(){
    display_container.classList.remove('shameOnYou')
    userInput.textContent='';
    resetScreen=false;
}
function setOperation(operator){

   if(operatorChosen!=null){evaluate()}

    firstOperand=userInput.textContent
    operatorChosen=operator
    pastInput.textContent=`${firstOperand}${operatorChosen}`
    resetScreen=true;

}


function evaluate(){
    if(userInput===null) return
    if(userInput.textContent==='0'&&operatorChosen==='÷'){
        display_container.classList.add('shameOnYou')
        pastInput.textContent='';
        userInput.textContent=`can't divide by 0`
        resetScreen=true;
        return
    }
  
    secondOperand = userInput.textContent;
    userInput.textContent= roundNumber(operate(firstOperand,operatorChosen,secondOperand))
    pastInput.textContent= `${firstOperand}${operatorChosen}${secondOperand}`
    operatorChosen=null;
}

function operate(a,operator,b){
    let num1= parseInt(a,10);
    let num2= parseInt(b,10)
    switch(operator){
        case '+':
            return(num1+num2)
        case '-':
            return(num1-num2)
        case 'x':
            return(num1*num2)
        case '÷':
            return(num1/num2)
        default:
            return null;
    }
    
}