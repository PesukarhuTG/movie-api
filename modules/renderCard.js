const listCard = document.querySelector('.films-list');

const renderCard = (data) => {
  listCard.textContent = '';

  const cards = data.map(item => {
    const card = document.createElement('li');
    card.className = 'films-item';

    const wrapperImg = document.createElement('div');
    wrapperImg.className = 'wrapper-img';

    const img = document.createElement('img');
    img.className = 'films-img';
    img.alt = `постер ${item.title || item.name}`;
    img.src = item.poster_path ?
      `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}` :
      './assets/img/no-poster.jpg';

    const rating = document.createElement('span');
    rating.className = 'film-rating';
    rating.textContent = (item.vote_average !== 0) ? item.vote_average : '-';

    const title = document.createElement('p');
    title.className = 'film-title';
    title.textContent = `${item.title || item.name}`;

    const overview = document.createElement('div');
    overview.className = 'overview';

    const overviewTitle = document.createElement('h3');
    overviewTitle.className = 'overview-title';
    overviewTitle.textContent = 'Описание';

    const overviewText = document.createElement('p');
    overviewText.className = 'overview-text';
    overviewText.textContent = item.overview ? item.overview : 'К сожалению, описание отсутствует';

    overview.append(overviewTitle, overviewText);
    wrapperImg.append(img);
    card.append(wrapperImg, rating, title, overview);

    return card;
  });

  listCard.append(...cards);
};

export default renderCard;