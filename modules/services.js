const API_KEY = '382ab592fd481e7e012dce3baf64088e';
const BASE_URL = 'https://api.themoviedb.org/3/';
const LANG = '&language=ru-RU';

const getData = url => fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw `Упс, что-то пошло не так: ${response.status}`
  })
  .catch(err => console.error(err));

export const getTrends = async (type = 'all', period = 'day', page = 1) => {
  const url = `${BASE_URL}trending/${type}/${period}?api_key=${API_KEY}${LANG}&page=${page}`;
  return await getData(url);
};

export const search = async (query, page) => {
  const url = `${BASE_URL}search/multi?api_key=${API_KEY}${LANG}&page=${page}include_adult=false&query=${query}`;
  return await getData(url);
};