import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import "./style.scss";
import Popular from "./popular/Popular";
import HindiMovie from "../home/hindi Movies/HindiMovie";
import UpcomingMovie from "./hindi Movies/UpcomingHindi";

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <Trending />
      <Popular />
      <HindiMovie />
      <UpcomingMovie />
    </main>
  );
};

export default Home;
