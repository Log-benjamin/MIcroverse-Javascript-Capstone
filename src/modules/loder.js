import {
  cardContainer, searchBtn, countryInp, allCountriesbtn, Americasbtn, Asiabtn,
  Africabtn, Europebtn,
} from './DomValues.js';
import loadCountries from './populate.js';
import searchandFind from './popupwindow.js';
import { addLike } from './submitLikes.js';
import { addComment, getCommentData } from './submitComment.js';
import { mobileMenu, hideMenu } from './mobile.js';

const loadOnPage = () => {
  window.addEventListener('load', () => {
    mobileMenu();
    loadCountries('allcountries');
  });

  allCountriesbtn.addEventListener('click', () => {
    hideMenu();
    loadCountries('allcountries');
  });

  Europebtn.addEventListener('click', () => {
    hideMenu();
    loadCountries('Europe');
  });

  Africabtn.addEventListener('click', () => {
    hideMenu();
    loadCountries('Africa');
  });

  Asiabtn.addEventListener('click', () => {
    hideMenu();
    loadCountries('Asia');
  });

  Americasbtn.addEventListener('click', () => {
    hideMenu();
    loadCountries('Americas');
  });

  searchBtn.addEventListener('click', () => {
    hideMenu();
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

    if (e.target.className === 'commentBtn submit-comment') {
      addComment(e.target);

      setTimeout(async () => {
        await getCommentData(e.target.id);
      }, 1000);
    }
  });
};

export default loadOnPage;