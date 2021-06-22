import { htmlHelper } from "./html.js";

console.log(htmlHelper);


const li = htmlHelper.createElement('li');
const span = htmlHelper.createElement('li');
htmlHelper.appendChild(li);
htmlHelper.appendChild(span, li);



htmlHelper.setActiveElement(li);

htmlHelper.addStyle({color: 'red'});

htmlHelper.toggleClass('active');

htmlHelper.toggleClass('active');

htmlHelper.toggleClass( 'good');

htmlHelper.addText('this is an li');
htmlHelper.addText('new text');

htmlHelper.changePosition( 100, 200);
htmlHelper.changePosition( 100, 500);
htmlHelper.appendChild(span, li);
htmlHelper.addEventListener('click', () => alert('clicked') )


