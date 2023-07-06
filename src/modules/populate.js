import { baseURL } from './getApiData.js';
import { cardSection, displayCountOnPage } from './DomValues.js';

let tempCount = 0;
const getCountry = (country, selected) => {
  if (selected === 'allcountries') {
    tempCount += 1;
    return `
            <div class="country-Container">
                <img class="flag" src="${country.flags.png}">
                <h2 class = "country-Name">${country.name.common}</h2>
                 <div class="commentLike">
                    <button id="${country.name.common}" class="commentBtn" type="text">Comment</button>

                    <div class="countLikes">
                        <i id="${country.name.common}"  class="fa-regular fa-heart fa-2xl"></i>
                        <span class="likeValue">likes</span>
                    </div>
                 </div>
           </div>
          `;
  }

  if (country.region === selected) {
    tempCount += 1;
    return `
              <div class="country-Container">
                <img class="flag" src="${country.flags.png}">
                <h2 class = "country-Name">${country.name.common}</h2>
                <div class="commentLike">
                <button id="${country.name.common}" class="commentBtn" type="text">Comment</button>
      
                    <div class="countLikes">
                        <i id="${country.name.common}"  class="fa-regular fa-heart fa-2xl"></i>
                        <span class="likeValue">likes</span>
                    </div>
                    
                </div>
            </div>
          `;
  }
  return '';
};

const displayCountries = (countries, selected) => {
  tempCount = 0;
  const countriesHTML = countries.map((country) => getCountry(country, selected));
  cardSection.innerHTML = countriesHTML.join('');
  displayCountOnPage.innerHTML = tempCount;
};

const loadCountries = async (selected) => {
  cardSection.classList.remove('active');
  await fetch(baseURL)
    .then((response) => response.json())
    .then((data) => displayCountries(data, selected));
};

export default loadCountries;