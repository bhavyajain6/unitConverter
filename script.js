let num = window.prompt("Enter number:");
// let num = 20;
const numDisplay = document.querySelector('.num');
numDisplay.textContent = num;

let number = document.querySelectorAll('.number');
number.forEach(number => {
    number.textContent = num;
})

//length
let resultFeet = document.querySelector('#result-feet');
let resultMeter = document.querySelector('#result-meter');


function length(){
    let feet = (num * 3.281).toFixed(3);
    let meter = (num / 3.281).toFixed(3);
    resultFeet.textContent = feet;
    resultMeter.textContent = meter;
}

//volume
let resultGallon = document.querySelector('#result-gallons');
let resultLiters = document.querySelector('#result-liters');

function volume(){
    let gallon = (num / 3.785).toFixed(3);
    let liters = (num * 3.785).toFixed(3);
    resultGallon.textContent = gallon;
    resultLiters.textContent = liters;
}


//mass
let resultPounds = document.querySelector('#result-pounds');
let resultKilograms = document.querySelector('#result-kilograms');

function mass(){
    let pounds = (num * 2.205).toFixed(3);
    let kilograms = (num / 2.205).toFixed(3);
    resultPounds.textContent = pounds;
    resultKilograms.textContent = kilograms;
}

length();
volume();
mass();
