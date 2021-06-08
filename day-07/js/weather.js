// const baseUrl = 'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0';



// function getLocationUrl(lon, lat) {
//     return `https://www.7timer.info/bin/astro.php?lon=${lon}&lat=${lat}&ac=0&unit=metric&output=json&tzshift=0`;

// }


// navigator.geolocation.getCurrentPosition(function(success) {

//     console.log('success', success)
//     fetch(getLocationUrl(success.coords.longitude, success.coords.latitude)).then( response => response.json() ).then( data => console.log(data));
// }, function(err) {
//     console.log('err', error)
// })


let index = 0;


const leftButton = document.createElement('button');
const rightButton = document.createElement('button');

document.body.appendChild(leftButton);
document.body.appendChild(rightButton);

leftButton.innerHTML = '<';
rightButton.innerHTML = '>';

rightButton.addEventListener('click', function() {
    index++;
    if (index === jokes.length) {
        index = 0;
    }
    showJoke();
});
leftButton.addEventListener('click', function() {
    index--;
    if (index < 0) {
        index = jokes.length - 1;
    }
    showJoke();
});


const container = document.createElement('div');
document.body.appendChild(container);

const jokes = [];


function getJokeUrl(category) {
    return `https://official-joke-api.appspot.com/jokes/${category}/ten`
}

fetch(getJokeUrl('programming'))
.then( response => response.json() )
.then( data => {

    data.forEach( function(joke) {
        const li = document.createElement('li');
        li.innerHTML = joke.setup;
    
        console.log(li.innerHTML)

        li.addEventListener( 'click', function() {
            alert(joke.punchline);
        });
        jokes.push(li);
    
    })

    showJoke();


});

document.addEventListener('touchstart', function() {
    console.log('touch');
})

document.addEventListener('touchmove', function(event) {
    console.log('touchmove', event);
})

function showJoke() {
    container.innerHTML = '';
    container.appendChild(jokes[index]);
}

