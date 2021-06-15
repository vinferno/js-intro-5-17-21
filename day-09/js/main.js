
function api(endpoint = '') {
    return fetch('https://60e2c52d7d58.ngrok.io/' + endpoint)
    .then(function (res) {
        return res.json();
    })
}

const getUsersButton = document.querySelector('#getUsers');

getUsersButton.addEventListener( 'click', function()  {
    api('users')
    .then( (data) => data.users )
    .then( function(users) { console.log(users) });
});

