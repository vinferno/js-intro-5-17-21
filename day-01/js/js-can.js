// can create element;
const newButton = document.createElement('button');
console.log(newButton);

// can place a element
document.body.appendChild(newButton);

// can change text
newButton.innerHTML = 'New';

// listen for events
newButton.addEventListener('click', function() {
    console.log('click')
});

// can get internet information
fetch('https://api.github.com/users/geekwisevinson').then( data => data.json()).then(test => console.log(test));

// can compute numbers
console.log( 1 + 5)