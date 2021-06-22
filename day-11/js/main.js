import { htmlHelper } from "./html.js";
import { dataHelper} from './data.js';



htmlHelper.createElement('input', 'login-input');
htmlHelper.createElement('button', 'login-button');
htmlHelper.createElement('span', 'who-is-logged-in');


htmlHelper.appendChild('login-input');
htmlHelper.appendChild('login-button');
htmlHelper.appendChild('who-is-logged-in');
htmlHelper.setActiveElement('login-button');
htmlHelper.addText('Login');
htmlHelper.addStyle({backgroundColor: 'green'});


htmlHelper.setActiveElement('who-is-logged-in');
htmlHelper.addText('username:');

htmlHelper.addStyle({marginLeft: '100px'});

htmlHelper.setActiveElement('login-button');

htmlHelper.addEventListener('click', () => {
    const username = htmlHelper.getByName('login-input').value;

    dataHelper.loggedInUser = dataHelper.createUser(username);
    htmlHelper.setActiveElement('who-is-logged-in');
    htmlHelper.addText('username: ' + username);

    console.log(dataHelper)
})







