import {
  cardContainer, searchBtn, countryInp, allCountriesbtn, Americasbtn, Asiabtn,
  Africabtn, Europebtn,
} from './DomValues.js';
import loadCountries from './populate.js';
import searchandFind from './popupwindow.js';
import { addLike } from './submitLikes.js';

const loadOnPage = () => {
  window.addEventListener('load', () => {
    loadCountries('allcountries');
  });
  allCountriesbtn.addEventListener('click', () => {
    loadCountries('allcountries');
  });
  Europebtn.addEventListener('click', () => {
    loadCountries('Europe');
  });
  Africabtn.addEventListener('click', () => {
    loadCountries('Africa');
  });
  Asiabtn.addEventListener('click', () => {
    loadCountries('Asia');
  });
  Americasbtn.addEventListener('click', () => {
    loadCountries('Americas');
  });
  searchBtn.addEventListener('click', () => {
    searchandFind(countryInp.value);
    window.scroll();
  });
  cardContainer.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.className === 'commentBtn') {
      searchandFind(e.target.id);
    }
    if (e.target.id === 'remove') {
      loadCountries('allcountries');
    }
    if (e.target.className === 'fa-regular fa-heart fa-2xl') {
      addLike(e.target.id);
      const likeValue = Number(e.target.parentElement.children[1].innerHTML);
      e.target.parentElement.children[1].innerHTML = likeValue + 1;
    }
  });
};
export default loadOnPage;