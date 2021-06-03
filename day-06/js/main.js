// Data

const yes = true; // boolean
const no = false;

const float = 0.1;
const int = 1; // numbers

const title = 'App';
const color = 'green'; // strings

const array = []; // lists (arrays)
const object = {
    apple: 'red'
}; // dictionaries (objects) key: value


// logic

if (1 + 1 > 2) {
    console.log('this is truthy');
} else if (title === 'Apps') {
    console.log('this is the second conditional')
} else {
    // console.log('default block');
}

// functions 
function getYesValue() {
    return yes;
}


// callbacks (functions that are used as parameter)

function doubleNumber(number, callbackFunction) {
    setTimeout(function() {
        callbackFunction( number * 3)
    }, 5000) 
}


// doubleNumber(5, function(product) {
//     console.log(product)
// })

// doubleNumber(5, function(product) {
//     console.log(product * 100);
//     document.body.innerHTML = product;
// })

// const product = doubleNumber(5, function() {console.log()})
// console.log(product)

const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
       resolve( Math.random() * 20);
    }, 5000) 
});


promise.then(function(answer) {
    console.log(answer);
    return answer * 2;
}).then( newAnswer => {
    console.log(newAnswer);
    return Math.floor(newAnswer);
}).then( flooredValue => {
    console.log(flooredValue)
})
