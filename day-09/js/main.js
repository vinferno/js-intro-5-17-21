
function api(endpoint = '', data) {
    return fetch('localhost:5000' + endpoint, {
        method: data ? "POST" : "GET",
        body: data,
        headers: {'content-type': 'application/json'},
    })
    .then(function (res) {
        return res.json();
    })
}

const getUsersButton = document.querySelector('#getUsers');
const sendUserButton = document.querySelector('#sendUserButton');


const sendUserNameInput = document.querySelector('#sendUserNameInput');
const userAgeInput = document.querySelector('#userAgeInput');


sendUserButton.innerText = 'Send User';


getUsersButton.addEventListener( 'click', function()  {
    api('users')
    .then( (data) => data.users )
    .then( function(users) { console.log(users) });
});

sendUserButton.addEventListener( 'click', () => {
    const username = sendUserNameInput.value;
    const age = Number(userAgeInput.value);
    console.log(document.forms['userInfo'].username.value)
    if (!username || !age) {
        return;
    }
    api( 'users', 
        JSON.stringify(
            { user:  { username, age } }
        )
    ).then( data => console.log('post', data));
});

function onSubmit(event) {
    console.log(event);
    event.preventDefault();
}