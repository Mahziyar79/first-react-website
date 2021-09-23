import HomeBanner from "../components/HomeBanner";
import Cards from "../components/Cards";
import { cards } from "../data/cards";
import ServiceBox from "../components/ServiceBox";
import AllProducts from "../components/Products/AllProducts";
import { useEffect } from "react";

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HomeBanner />
      <div className="service-info">
        <h1>Do you fancy visit our Services?!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <ServiceBox count="4" />
      <Cards cards={cards} />
      <AllProducts />
    </>
  );
};

export default Home;
