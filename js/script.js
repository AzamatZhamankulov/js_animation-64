"use strict";

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
// const btn = document.querySelector('.btn');
// let timerId6,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);

//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos ++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

// btn.addEventListener('click', myAnimation);


//! lesson 65 Garbage Collection, (GC) and memory loss

//todo memory loss bcs GC can't delete this variable bcs it is global
// function func() {
//     smth = 'some string'; // it is like window.smith = "string" - it is global can't del
// }


//todo memory loss bcs GC can't delete this variable bcs it is on setInterval
// const someResource = getData();
// const node = document.querySelector('.class');

// setInterval(function() {
//     if (node) {
//         node.innerHTML = someResource;
//     }
// }, 5000); // so here it will repeat every 5 sec and  that's why there should be breaks


//todo memory loss bcs GC can't delete this variable bcs it is Closure in function
// function outer() {
//     const potentiallyHugeArray = [];
//     return function inner() {
//         potentiallyHugeArray.push('Some data');
//         console.log('Data!');
//     }
// }

// const showData = outer();


//todo memory loss bcs GC can't delete this variable bcs it is part of DOM element
// function elementCreat() {
//     const div = document.createElement('div');
//     div.id = 'test';
//     return div;
// }

// const testDiv = elementCreat();

// document.body.append(testDiv);

// //when we delete created element from DOM tree 
// function deleteElement() {
//     document.body.removeChild(document.getElementById('test'));
// }
// deleteElement();

//todo prevouse memory lose we can avoid as following method:
// function elementCreat() {
//     const div = document.createElement('div');
//     div.id = 'test';
//     document.body.append(testDiv);
// }
// elementCreat();

// //when we delete created element from DOM tree 
// function deleteElement() {
//     document.body.removeChild(document.getElementById('test'));
// }
// deleteElement();