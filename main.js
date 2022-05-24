let counter = 9
let counterTwo = 12
let counterThree = 9


function clickBtn() {
   counter++;
   document.getElementById('one').innerText = counter;
}

function clickBtnTwo() {
   counterTwo++;
   document.getElementById('two').innerText = counterTwo;
}

function clickBtnThree() {
   counterThree++;
   document.getElementById('three').innerText = counterThree;
}