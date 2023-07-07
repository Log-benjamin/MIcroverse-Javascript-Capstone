import {menuBtn, closemenuBtn, searchContainer, headerNav, navSection, displayCountOnPage } from './DomValues.js';

const mobileMenu = () => {
    menuBtn.addEventListener('click', () => {
        closemenuBtn.classList.toggle('active');
        menuBtn.classList.toggle('active');
        searchContainer.classList.add('active');
        headerNav.classList.add('active');
        navSection.classList.add('active');
      });

      closemenuBtn.addEventListener('click', () => {
        closemenuBtn.classList.toggle('active');
        menuBtn.classList.toggle('active');
        searchContainer.classList.remove('active');
        headerNav.classList.remove('active');
        navSection.classList.remove('active');
      });
      window.onscroll = () => {
        closemenuBtn.classList.remove('active');
        menuBtn.classList.remove('active');
        searchContainer.classList.remove('active');
        headerNav.classList.remove('active');
        navSection.classList.remove('active');
      };

};

const hideMenu = () => {
    closemenuBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    searchContainer.classList.remove('active');
    headerNav.classList.remove('active');
    navSection.classList.remove('active');
}

export { mobileMenu, hideMenu};
