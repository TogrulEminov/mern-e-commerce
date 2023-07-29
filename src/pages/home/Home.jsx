import HeroBanner from './HeroBanner/HeroBanner';
import Popular from './popular/Popular';
import './style.scss';
import Rated from './TopRated/Rated';
import Trending from './trending/Trending';
const Home = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <Trending/>
      <Popular/>
      <Rated/>
    </div>
  );
};

export default Home;
