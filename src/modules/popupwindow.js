import { baseURL } from './getApiData.js';
import { cardSection, displayCountOnPage, countryInp } from './DomValues.js';

const getCountry = (country, Name) => {
  let capitalCity = `${country.capital}`;
  capitalCity = capitalCity.toLowerCase();
  const countryName = country.name.common.toLowerCase();

  if ((capitalCity === Name) || (countryName === Name)) {
    const timeZ = country.timezones[0];
    const popultion = country.population.toLocaleString();

    return `
      <div class="pop-Container">
            <i class="fa-solid fa-circle-xmark fa-2xl" id="remove"></i>
            <div class="img-and-desc">
               <img class="fl-active" src="${country.flags.png}">

               <div class="country-description">
                  <h2>${country.name.common}</h2>
                  <p>Offical-Name -> <span class="country-span">${country.name.official}</span></p>
                  <p>Capital-City -> <span class="country-span">${country.capital}</span></p>
                  <p>currencies -> <span class="country-span">${country.currencies[Object.keys(country.currencies)].symbol} - ${country.currencies[Object.keys(country.currencies)].name}</span></p>
                  <p>sub-region -> <span class="country-span">${country.subregion}</span></p>
                  <p>Languages -> <span class="country-span">${country.languages[Object.keys(country.languages)]}</span></p>
                  <p>Population -> <span class="country-span">${popultion}</span></p>
                  <p>Time-zone -> <span class="country-span">${timeZ}</span></p>
                  <p class="wiki-link">For more Info Visit -> <a href="https://en.wikipedia.org/wiki/${country.name.common}">${country.name.common}</a> </p>
               </div>
             </div> 
          
            <div class="commentLike-Pop">

                
            </div>
       </div>
    `;
  }
  return '';
};

const displayCountries = (countries, Name) => {
  const countriesHTML = countries.map((country) => getCountry(country, Name));
  cardSection.innerHTML = countriesHTML.join('');
  cardSection.classList.add('active');
  displayCountOnPage.innerHTML = 1;
};

const searchandFind = async (value) => {
  countryInp.value = '';
  const Name = value.toLowerCase();
  await fetch(baseURL)
    .then((response) => response.json())
    .then((data) => displayCountries(data, Name));
};

export default searchandFind;
