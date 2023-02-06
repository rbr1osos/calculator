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
const display_div = document.querySelector('p')
const add_button = document.querySelector('.add');
let num1 =[]
//when button is pressed, add a div to a container
// have display show the container
one_button.addEventListener('click',() =>{
    changeDisplay('1');
}); 
two_button.addEventListener('click',() =>{
    changeDisplay('2');
}); 

add_button.addEventListener('click',()=>{
    changeDisplay('+');
})

function changeDisplay(num){


    //add numbers into an array(num1) 
        if(isNaN(num)===false){ //if a number
            parseInt(num,10) //change to a number
            let newNum =num1.join('');
            num1.push(num);

            /*  display number  */
            let num_p = document.createElement('p');
            num_p.classList.add('newNum');
            num_p.textContent = num;
            display_div.appendChild(num_p);
            return num1
        }
        else{
            num1.push(num)
            convertNumber(num);


            /* display operator */
            let num_p = document.createElement('p');
            num_p.textContent = num;
            display_div.appendChild(num_p);

        }
}

function convertNumber(num){
    console.log(num1)
}