import './style.css';
import Logo from './asset/logo-img.gif';
import {
  cardContainer, logoContainer, allCountriesbtn, Americasbtn, Asiabtn,
  Africabtn, Europebtn,
} from './modules/DomValues.js';
import loadCountries from './modules/populate.js';

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
  if (e.target.id === 'remove') {
    loadCountries('allcountries');
  }
});
