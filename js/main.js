"use strict";

const btn = document.getElementById('btn');
const body = document.body;


colorChangeGradient();
btn.addEventListener('click', colorChangeGradient);



function colorChangeGradient() {
    const color1 = generateColor();
    const color2 = generateColor();
    body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

    const firstColor = document.getElementById('first-color');
    const secondColor = document.getElementById('second-color');
    firstColor.innerHTML = color1;
    secondColor.innerHTML = color2;
}

function generateColor() {
    const colorArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f'];
    let result = '#';
    for (let i = 0; i < 6; i++) {
        result = result + colorArr[Math.floor(Math.random() * colorArr.length)];
    }
    return result;
}

