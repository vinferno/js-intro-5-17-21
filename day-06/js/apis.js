const rootUrl = 'http://api.tvmaze.com';

try {
    console.log(rootUrl.test.image);
} catch (e) {
    console.log(e);
}



const searchKeywordInput = document.createElement('input');
document.body.appendChild(searchKeywordInput);
const searchKeywordButton = document.createElement('button');
document.body.appendChild(searchKeywordButton);
searchKeywordButton.innerText = 'Keyword Search';
const showsList = document.createElement('div');
const searchPeopleInput = document.createElement('input');
document.body.appendChild(searchPeopleInput);
const searchPeopleButton = document.createElement('button');
searchPeopleButton.innerText = 'People Search';
document.body.appendChild(searchPeopleButton);
document.body.appendChild(showsList);
const searchCastInput = document.createElement('input');
document.body.appendChild(searchCastInput);




searchKeywordButton.addEventListener('click', renderKeywordShows );

searchPeopleButton.addEventListener('click', renderPeopleShows)




function renderPeopleShows() {
    showsList.innerHTML = '';
    searchShowByPeople(searchPeopleInput.value)
    .then( listOfShows => listOfShows
        .forEach( item => renderPerson(item.person)));
}



function renderKeywordShows() {
    showsList.innerHTML = '';
    searchShowByKeyword(searchKeywordInput.value)
    .then( listOfShows => listOfShows
        .forEach( item => renderShow(item.show)));
}


function searchShowByKeyword(keyword) {
    const url = '/search/shows?q=' + keyword;
    return fetch(rootUrl + url)
    .then( response => response.json())
    .then( data => { console.log(data); return data});
}


function searchShowByPeople(person) {
    const url = '/search/people?q=' + person;
    return fetch(rootUrl + url)
    .then( response => response.json())
    .then( data => { console.log(data); return data});
}


function renderShow(show) {
    console.log('show')
    const mainLi = document.createElement('ul');
    const nameLi = document.createElement('li');
    const languageLi = document.createElement('li');
    nameLi.innerText = show.name;
    languageLi.innerText = show.language;
    mainLi.appendChild(nameLi);
    mainLi.appendChild(languageLi);
    showsList.appendChild(mainLi);
    if (show.image) {
        addImage(show, mainLi)
    }
}

function renderPerson(person) {


    const mainLi = document.createElement('ul');
    const nameLi = document.createElement('li');
    nameLi.innerText = person.name;
    
    mainLi.appendChild(nameLi);
    showsList.appendChild(mainLi);

    if (person.image) {
        addImage(person, mainLi)
    }


}


function addImage(item, mainLi) {

        const img = document.createElement('img');
        mainLi.appendChild(img);
        img.src = item.image.original;
        img.width = 100;
 
}




Promise.all([searchShowByPeople('joe'), searchShowByKeyword('silicon')]).then( data => {console.log('all', data)}).finally(() => console.log('this promise is complete'))



