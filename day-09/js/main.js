
function api(endpoint = '', data) {
    return fetch('https://60e2c52d7d58.ngrok.io/' + endpoint, {
        method: data ? "POST" : "GET",
        body: data,
        headers: {'content-type': 'application/json'},
    })
    .then(function (res) {
        return res.json();
    })
}

const getUsersButton = document.querySelector('#getUsers');
const sendUserNameInput = document.querySelector('#sendUserNameInput');
const sendUserButton = document.querySelector('#sendUserButton');


sendUserButton.innerText = 'Send User';


getUsersButton.addEventListener( 'click', function()  {
    api('users')
    .then( (data) => data.users )
    .then( function(users) { console.log(users) });
});

sendUserButton.addEventListener( 'click', () => {
    const username = sendUserNameInput.value;
    console.log(username);

    if (!username) {
        return;
    }



    console.log('this wont happen unless there is a username', username);
   

    api('users', JSON.stringify({user: username}) ).then( data => console.log('post', data));
});

