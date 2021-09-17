import HomeBanner from "../components/HomeBanner";
import Cards from "../components/Cards";
import { cards } from "../data/cards";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Cards cards={cards} />
    </>
  );
};

export default Home;
