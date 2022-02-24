import { search } from "./services.js";
import renderCard from './renderCard.js';

const mainTitle = document.querySelector('.films-title');
const searchForm = document.querySelector('.header-search-form');
const searchInput = document.querySelector('.header-search-input');

const searchMovie = () => {

  const searchData = () => {
    if (!searchInput.value) return;

    search(searchInput.value)
      .then(data => {
        if (data.results.length) {
          mainTitle.style.textAlign = 'center';
          renderCard(data.results);
        } else {
          throw 'К сожалению, по вашему запросу ничего не найдено';
        }
      })
      .then(() => {
        mainTitle.textContent = 'Результат поиска:';
      })
      .catch(err => {
        mainTitle.style.textAlign = 'center';
        mainTitle.textContent = err;
      })
  };

  /*search by enter*/
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    searchData();
  });

  /*search by click on search-buttom*/
  searchForm.addEventListener('click', e => {
    if (e.target.classList.contains('header-search-form')) {
      searchData();
    }
  })
};

export default searchMovie;