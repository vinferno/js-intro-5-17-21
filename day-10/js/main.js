

let user = sessionStorage.getItem('user');
let theme = localStorage.getItem('theme');


if (!user) {
    user = prompt('user?');
    sessionStorage.setItem('user', user);
}


if (!theme) {
    theme = prompt('theme');
    localStorage.setItem('theme', theme);
}


console.log(user, theme);


function whatToDo() {
    console.log('this is what to do');
    console.log( new Date() )
}

const sec = 1000;

// const setTimeoutId = setTimeout(whatToDo, 5 * sec );




const setIntervalId = setInterval(whatToDo, 5 * sec);

setTimeout(function() {
    console.log('stop set time out')
    clearInterval(setIntervalId);
}, 15 * sec );



console.log(new Date())







// let myNewElement;
// if (new Date().getHours() > 5 && new Date().getDay() === 3) {
//     myNewElement = document.createElement('div');
// } else {
//     myNewElement = document.createElement('li');
// }

// switch(new Date().getHours()) {
//     case 0:
//         console.log('midnight');
//     break
//     case 1:
//     console.log('1');
//     break;
//     case 19:
//     console.log('2')
//     break;
//     default :
//     console.log('another time not one of the above')
// }
// console.log(new Date().getHours());

// function hulk() {
//     this.style.color = 'green';
//     const beforeValue = parseInt(this.style.fontSize) || 20;
//     this.style.fontSize = beforeValue + 20 + 'px';
// }

// // myNewElement.addEventListener('click', hulk);
// document.body.appendChild(myNewElement);
// myNewElement.innerText = 'I am a new element';
// myNewElement.classList.add('bigParagraphs');

// const elements = document.querySelectorAll('.bigParagraphs');
// elements.forEach( element => {
//     element.addEventListener('click', hulk);
// });



// const nonupdatable = 'test';

// let update;
// const newValue = update + 1;



// var test;
// var test = 1;