import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import "./style.scss";

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <Trending />
      <div style={{ height: 1000 }}></div>
    </main>
  );
};

export default Home;
