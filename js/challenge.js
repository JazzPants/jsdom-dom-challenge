// document.addEventListener("DOMContentLoaded", setInterval)

let interval = setInterval(increment, 1000);

function increment() {
    let x = parseInt(counterBox.innerText, 10);
    x++;
    return counterBox.innerHTML = x;
}


const counterBox = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const likeButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const submitButton = document.getElementById('submit');

const likeList = document.querySelector('.likes');
let clicks = 0;

function upNumber() {
    console.log('plus button clicked!');
    console.log(counterBox.innerText);
    let x = parseInt(counterBox.innerText, 10);
    x++;
    return counterBox.innerHTML = x;
}

function downNumber() {
    console.log('minus button clicked!');
    console.log(counterBox.innerText);
    let x = parseInt(counterBox.innerText, 10);
    // value = isNaN(value) ? 0 : value; //if value is NaN change to 0, otherwise keep 'value'
    if (x > 0) {
        x--;
    }
    return counterBox.innerHTML = x;
}

function addLike() {
    console.log('like button clicked!');
    let x = parseInt(counterBox.innerText, 10);
    let currentNumber = x;
    console.log(`${x}`);
    console.log(`${currentNumber}`);
    // if (currentNumber === x) {
    //     clicks++;
    // } else {
    //     clicks = 0
    // }
    

    li = document.createElement("li");
    li.innerHTML = `${x} was liked ${clicks} times!`;
    likeList.appendChild(li); 
    if (currentNumber === x) {
        
    } else {
        
    }
    
    
}

function pauseCounter() {
    const x = pauseButton.innerText;
    if (x === "pause") {
        pauseButton.innerHTML = "resume"
        clearInterval(interval)
        interval = null;
    } else {
        pauseButton.innerHTML = "pause"
        interval = setInterval(increment, 1000)
    }
}

function submitContent(event) {
    event.preventDefault();
}

plusButton.addEventListener('click', upNumber);
minusButton.addEventListener('click', downNumber);
likeButton.addEventListener('click', addLike);
pauseButton.addEventListener('click', pauseCounter);
submitButton.addEventListener('click', submitContent)


// let intervalID;
// function changeNumber() {
// if (!intervalID) {
//     setInterval(upNumber, 1000);
// }
// }

// function upNumber() {
//     let x = counterNumber.innerHTML;
// counterNumber.innerHTML = x + 1;
// }



// upNumber();
// }

// function pauseUpNumber() {
// clearInterval(intervalID);
// intervalID = null;
// }
// document.getElementById('pause').addEventListener('click', pauseUpNumber);
// document.getElementById('start').addEventListener('click', upNumber)

// let counterNumber = document.getElementById('counter');
// let i = 0;
// function changeNumber() {
//     if (!nIntervId) {
//         nIntervId = setInterval(upNumber, 1000);
//     }
// }

// }

// function pauseCounter() {
//     return 0
// }


// let counter = setInterval(myCallback, 1000);

// function myCallback(a) {
//     console.log(a);
// }


// let nIntervId;

// function changeNumber() {
//     if (!nIntervId) {
//         nIntervId = setInterval(changeText, 1000)
//     }
// }

// function changeText() {
//     const counterNumber = document.getElementById('counter');
//     let i = counterNumber.value;
//     while ( i >= 0) {
//         counterNumber.innerHTML = i;
//         i++
//     }
    
// }

