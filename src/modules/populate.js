import { baseURL } from './getApiData.js';
import { cardSection, displayCountOnPage } from './DomValues.js';
import { getLikeData } from './submitLikes.js';

let likevalue = 0;
let tempCount = 0;
const getCountry = (country, selected, likeData) => {

  likeData.forEach(element => {
    if (element.item_id === country.name.common){
      likevalue = element.likes;
    }
  });
  
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
                     <span class="insertLike">${likevalue}</span><span>likes</span>
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
                        <span class="insertLike">${likevalue}</span><span>likes</span>
                    </div>
                    
                </div>
            </div>
          `;
  }
  return '';
};

const displayCountries = (countries, selected, likeData) => {
  tempCount = 0;
  const countriesHTML = countries.map((country) => getCountry(country, selected, likeData));
  cardSection.innerHTML = countriesHTML.join('');
  displayCountOnPage.innerHTML = tempCount;
};

const loadCountries = async (selected) => {
  cardSection.classList.remove('active');
  const likeData = await getLikeData();
  await fetch(baseURL)
    .then((response) => response.json())
    .then((data) => displayCountries(data, selected, likeData));
};

export default loadCountries;