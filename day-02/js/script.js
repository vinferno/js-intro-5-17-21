import  madeup, {users2} from './script2.js';
import * as data from './data.js';

const area = 500;
let intervalTime = 1000;

let score = 0;
const moleImg = document.createElement('img');
document.body.appendChild(moleImg);
moleImg.src = 'https://toppng.com/uploads/thumbnail//monty-mole-11548526901pnjtfmgmvn.png';

moleImg.style.position = 'absolute';

moleImg.style.width = '100px';

moleImg.addEventListener('click', whenMoleIsClicked )


function whenMoleIsClicked() {
    score = score + 1;
    console.log(score);
    intervalTime = intervalTime - 100;
    clearInterval(interval);
    moveMole(getRandomNumber(area), getRandomNumber(area));

    interval = setInterval(doLater, intervalTime);
}

function moveMole(x, y) {
    moleImg.style.left = x + 'px';
    moleImg.style.top = y + 'px';
}

function getRandomNumber(limit) {
    return Math.random() * limit;
}

moveMole(getRandomNumber(area), getRandomNumber(area));


function doLater() {
    moveMole(getRandomNumber(area), getRandomNumber(area));
}

// extra
let interval = setInterval(doLater, intervalTime);