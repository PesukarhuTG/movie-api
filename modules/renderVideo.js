import { getTrends } from './services.js';
import renderCard from './renderCard.js';

const renderVideo = async () => {
  const data = await getTrends();

  const films = data.results;
  films.length = 12;
  renderCard(films);
};

export default renderVideo;