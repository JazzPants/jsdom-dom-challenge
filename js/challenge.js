document.addEventListener("DOMContentLoaded", beginCounter)

function beginCounter() {
    return interval = setInterval(increment, 1000);
}
 
let clicks = 0;
let likedNumbers = {} //dynamic key!

function increment() {
    let x = parseInt(counterBox.innerText, 10);
    x++;
    clicks = 0
    return counterBox.innerHTML = x;
}

function restartCounter() {
    minusButton.disabled = false;
    plusButton.removeAttribute("disabled")
    likeButton.removeAttribute("disabled")
    return counterBox.innerHTML = 0;
}

const counterBox = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const likeButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const submitButton = document.getElementById('submit');
const restartButton = document.getElementById('restart');

const likeList = document.querySelector('.likes');


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
    let x = parseInt(counterBox.innerText, 10);
    let currentNumber = x;
    if(likedNumbers[currentNumber]) { //if/when likedNumbers has a key of currentNumber
        const li = document.querySelector(`[data-number="${currentNumber}"]`)
        likedNumbers[currentNumber] += 1; //keep incrementing the object.key by 1 if clicked many times within 1 second
        console.log(`${x} was liked ${likedNumbers[currentNumber]} times!`)
        li.innerHTML = `${x} was liked ${likedNumbers[currentNumber]} times!`; //override the 1 like li element
    } else { //if a new counter number and clicked once in one second
        likedNumbers[currentNumber] = 1 //one click = one like for the current object key (the current counter number)
        const li = document.createElement("li");
        console.log(`${x} was liked once`)
        li.dataset.number = currentNumber; //track the li and give it a value we can refer to
        li.innerHTML = `${x} was liked 1 time!`;
        likeList.appendChild(li); 
    }
    // if (currentNumber === x) {
    //     clicks++;
    // } else {
    //     clicks = 0
    // }
}

function pauseCounter() {
    const x = pauseButton.innerText;
    if (x === "pause") {
        pauseButton.innerHTML = "resume"
        clearInterval(interval)
        interval = null;
        minusButton.disabled = true; //1st way to disable
        plusButton.setAttribute("disabled","") //2nd way to disable
        likeButton.setAttribute("disabled","")
    } else {
        pauseButton.innerHTML = "pause"
        interval = setInterval(increment, 1000)
        minusButton.disabled = false;
        plusButton.removeAttribute("disabled")
        likeButton.removeAttribute("disabled")
    }
}

function submitContent(event) {
    event.preventDefault();
    let newCommentValue = document.getElementById("comment-input").value;
    let newComment = document.createElement("div")
    newComment.innerHTML = newCommentValue;
    document.getElementById('list').appendChild(newComment);
}

plusButton.addEventListener('click', upNumber);
minusButton.addEventListener('click', downNumber);
likeButton.addEventListener('click', addLike);
pauseButton.addEventListener('click', pauseCounter);
submitButton.addEventListener('click', submitContent)
restartButton.addEventListener('click', restartCounter)


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

