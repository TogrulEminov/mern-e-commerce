import HeroBanner from './HeroBanner/HeroBanner';
import './style.scss';
const Home = () => {
  return (
    <div className="home-page">
      <HeroBanner />
      <div style={{height:1000}}></div>
    </div>
  );
};

export default Home;
