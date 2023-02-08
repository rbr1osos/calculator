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
let SecondOperand='';
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

     if ((userInput.textContent).length>11){
         let numbers= (userInput.textContent).substring(1)
         userInput.textContent= numbers;

    }
}

evaluate_button.addEventListener('click',()=>{
    evaluate();
})

backspace_button.addEventListener('click',()=>{
    backOne();
})

function backOne(){
    let currentNumber= userInput.textContent;
    let newNum= currentNumber.substring(0,currentNumber-1)
    let newString= newNum.replace(/.$/,'');
    userInput.textContent=newString;

    if (newString == ''){
        let currentNumber2=pastInput.textContent
        console.log(currentNumber2)
        let newNum2=currentNumber2.substring(0,currentNumber2.length-1)
        console.log(newNum2)
        let newString2=newNum2.replace(/.$/,'');
        pastInput.textContent=newString2;
    }
}
function allClear(){
    userInput.textContent='';
    pastInput.textContent='';
    firstOperand=null;
    secondOperand=null;
}
function reset(){
    display_container.classList.remove('shameOnYou')
    userInput.textContent='';
    resetScreen=false;
}
function setOperation(operator){
    firstOperand=userInput.textContent
    operatorChosen=operator
    pastInput.textContent=`${firstOperand}${operatorChosen}`
    resetScreen=true;

}


function evaluate(){
    if(userInput.textContent==='0'&&operatorChosen==='÷'){
        display_container.classList.add('shameOnYou')


        pastInput.textContent='';
        userInput.textContent=`can't divide by 0`
        resetScreen=true;
        return
       
    }
    secondOperand = userInput.textContent;
    userInput.textContent= operate(firstOperand,operatorChosen,secondOperand)
    pastInput.textContent= `${firstOperand}${operatorChosen}${secondOperand}`
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
    }
    
}