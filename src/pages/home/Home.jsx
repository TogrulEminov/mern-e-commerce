import HeroBanner from './HeroBanner/HeroBanner';
import Popular from './popular/Popular';
import './style.scss';
import TopRated from './TopRated/TopRated';
import Trending from './trending/Trending';
const Home = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  );
};

export default Home;
