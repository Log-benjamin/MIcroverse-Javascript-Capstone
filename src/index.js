import './style.css';
import Logo from './asset/logo-img.gif';
import {
  cardContainer, searchBtn, countryInp, logoContainer, allCountriesbtn, Americasbtn, Asiabtn,
  Africabtn, Europebtn,
} from './modules/DomValues.js';
import loadCountries from './modules/populate.js';
import { addComment } from './modules/submitComment.js';

const myIcon = new Image();
myIcon.src = Logo;
logoContainer.appendChild(myIcon);

window.addEventListener('load', () => loadCountries('allcountries'));

allCountriesbtn.addEventListener('click', () => loadCountries('allcountries'));

Europebtn.addEventListener('click', () => loadCountries('Europe'));

Africabtn.addEventListener('click', () => loadCountries('Africa'));

Asiabtn.addEventListener('click', () => loadCountries('Asia'));

Americasbtn.addEventListener('click', () => loadCountries('Americas'));

cardContainer.addEventListener('click', (e) => {
  if (e.target.className === 'commentBtn') {
    searchandFind(e.target.id);
  }

  if (e.target.id === 'remove') {
    loadCountries('allcountries');
  }

});
