document.body.appendChild(document.createElement('input'));
const input = document.querySelector('input');
input.placeholder = 'type something';
input.type = 'number';

input.addEventListener('keydown', function(event) { 
    console.log('input', input.value);
    console.log(event);
    if (event.code === 'Enter') {
        whatShouldHappenOnSubmit()
    }
});


const submitButton = document.createElement('button');
document.body.appendChild(submitButton);
submitButton.innerText = 'Submit';

submitButton.addEventListener('click', whatShouldHappenOnSubmit);

const colorInput = document.createElement('input');
colorInput.type = 'color';
document.body.appendChild(colorInput);

colorInput.addEventListener('change', function() {
    console.log('test', colorInput.value);
    document.body.style.backgroundColor = colorInput.value;
});


function whatShouldHappenOnSubmit() {
    
    if (input.value == 7) {
        alert('hey you guessed the magic number');
    }
    if (!input.value) {
        return;
    }

    if (isNameUsed(input.value)) {
        alert('cant use same name')
        return;
    }

    if (input.value) {
        console.log('click', input.value);
        const li = document.createElement('li');
        document.body.appendChild(li);
        li.innerText = input.value;
        input.value = '';
        input.focus();
    }

};

function isNameUsed(text) {
    const lis = Array.from(document.querySelectorAll('li'));

    return lis.some( function(item) { return item.innerText === text}) 
}

1 == '1' ? console.log(true) : console.log(false);

const age = 18;

switch(age) {
    case 18: 'you are just old enough'
    break;
    case 21: 'you are old enough for vip';
    break;
    default:
        'you are not allowed';

}