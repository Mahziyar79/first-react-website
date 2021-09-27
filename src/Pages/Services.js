import ServicesBanner from "../components/ServicesBanner";
import { Link } from "react-router-dom";
import ServiceBox from "../components/ServiceBox";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ServicesBanner />
      <ServiceBox count='8' />
      <div className='home-btn'>
        <Link to="/">
          <button>Back to Home Page</button>
        </Link>
      </div>
    </>
  );
};

export default Services;
