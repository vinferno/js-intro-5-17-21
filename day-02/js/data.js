// Primitive Data Types
const appName = '0';
const score = 0;
const isVIP = true;

// Compound Data Types
const array = [1, '1', true];
const object = {
    0: 'test',
    appName: '1',
    score: 1,
    isVip: false,
};
delete object.appName;
object.appName = 'win';

console.log(array[0], Object.keys(object));
