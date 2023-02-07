

// Have numbers be displayed when button is pressed
//first number is in num1, then operator, then second number is num2
    //- add div class called num2 when second number is pressed
const one_button = document.querySelector('.one');
const two_button = document.querySelector('.two');
const three_button = document.querySelector('.three');
const four_button = document.querySelector('.four');
const five_button = document.querySelector('.five');
const six_button = document.querySelector('.six');
const seven_button = document.querySelector('.seven');
const eight_button = document.querySelector('.eight');
const nine_button = document.querySelector('.nine');
const zero_button = document.querySelector('.zero');
const add_button = document.querySelector('.add');
const equal_button = document.querySelector('.equal');
const clear_button = document.querySelector('.clear')
const display_div = document.querySelector('.display');
const rawDisplay_div = document.querySelector('.raw-display');

let num1=[];
let num2=[];
let operatorChosen=[];

function changeDisplay(num){
    /* add numbers into an array(num1) */
  if(isNaN(num)===false){
        parseInt(num,10)
        num1.push(num);
        let newNum =num1.join('');
        display_div.textContent=newNum;
        return num1;
  }
  else{
    return;}
}
function getSum(operator){
  num1.push(operator)
  //make into one number
  let makeString1=num1.join('');
  const numberss = makeString1.split(/\D/g).filter(Boolean); //combine into one number
  operatorChosen.push(makeString1.split(/\d/g).filter(Boolean)); //operator selected 
  
  let justString = numberss.join('');
  let justNumber = parseInt(justString,10);
  num2=justNumber;
   num1=[];
    display_div.innerHTML=' ';
    rawDisplay_div.textContent=(num2+'+');
}

function getTotal(){
  let operator= operatorChosen.join('');
  if (operator==='+'){
    let string_num1=num1.join('');
    let int_num1=parseInt(string_num1,10);
    console.log('here inside: '+num1)
    rawDisplay_div.innerHTML='';
    num2=int_num1+num2
    display_div.innerText=num2;
  }
}
function clear(){
    display_div.innerText=[];
    rawDisplay_div.innerText=[];
    num1=[];
    num2=[];
    operatorChosen=[];


}
function operator_kind(operator){ //what kind of operator is it 
    switch(operator){
        case '+':
            getSum(operator);
            break;
        case '=':
            getTotal();
            break;
    }
}





//events
one_button.addEventListener('click',() =>{
    changeDisplay('1');
}); 
two_button.addEventListener('click',() =>{
    changeDisplay('2');
}); 
three_button.addEventListener('click',() =>{
    changeDisplay('3');
}); 
four_button.addEventListener('click',() =>{
    changeDisplay('4');
}); 
five_button.addEventListener('click',() =>{
    changeDisplay('5');
}); 
six_button.addEventListener('click',() =>{
    changeDisplay('6');
}); 
seven_button.addEventListener('click',() =>{
    changeDisplay('7');
}); 
eight_button.addEventListener('click',() =>{
    changeDisplay('8');
}); 
nine_button.addEventListener('click',() =>{
    changeDisplay('9');
}); 
zero_button.addEventListener('click',() =>{
    changeDisplay('0');
}); 

add_button.addEventListener('click',()=>{
    operator_kind('+');
})
equal_button.addEventListener('click',()=>{
    operator_kind('=');
})
clear_button.addEventListener('click',clear);

// function addNum(first_Sel){
//     let num2 = first_Sel;
//     console.log(num2);
//     display_div.innerText='';
// }
// function convertNumber(num){
//     console.log(num1)
// }