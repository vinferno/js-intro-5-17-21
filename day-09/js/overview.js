const myString = '!' && "test" && ``;
const myNumber = 1 && 1 && 2;
const myBoolean = true || false;

console.log(myNumber, myString, myBoolean);

const array = [10, 2, true];
const object = {
    age: 10,
    list: array,
    name: 'Vinson'
};

console.log(object);

function addOne(number) {
    const element = document.createElement('li');
    (1 + 1 == 2 || object.age == 10) ?
    console.log(true) :
    console.log(false);

    document.body.appendChild(element);
    element.innerHTML = '';
    return number + 1
}

console.log(addOne(7))