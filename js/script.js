"use strict"

// const timerId = setTimeout(() => {
//     console.log('Hello it is timeout');   
// }, 2000);

// const timerId2 = setTimeout((text) => {
//     console.log(text);   
// }, 2000, 'it is another way of syntaxix for timeout');

//todo we can give as argument another function
// const timerId3 = setTimeout(logger, 2000);

// function logger () {
//     console.log('Some text');
// }

//todo we can break the timeout with interval
// const timerId4 = setTimeout(logger, 2000);

// clearInterval(timerId4);

// function logger () {
//     console.log('Some text');
// }

//todo let's add event listner to btn
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     const timerId5 = setTimeout(logger, 2000);
// })

// function logger () {
//     console.log('Some text');
// }

//todo  let's try to break settimeout
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', () => {
//     const timerId5 = setTimeout(logger, 2000);
// })

// // clearInterval(timerId5); // it will not work because out timerID inside the function

// function logger () {
//     console.log('Some text');
// }

//todo we can make timerId global => out side of the function
// const btn = document.querySelector('.btn');
// let timerId6,
//     i = 0;

// btn.addEventListener('click', () => {
//     // timerId6 = setTimeout(logger, 2000);
//     timerId6 = setInterval(logger, 2000);
// });

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId6);
//     }
//     console.log('Some text action could be here!');
//     i++;
// }

//todo recursive setTimeout

// let id = setTimeout(function log() {
//     console.log('Recursive setTimeout!');
//     id = setTimeout(log, 1000);
// }, 5000); // it will first ime give text in 5 sec than every 1 sec

//todo let's make an animation 
const btn = document.querySelector('.btn');
let timerId6,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos ++;
            elem.style.top = pos + "px";
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);