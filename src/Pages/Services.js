import ServicesBanner from "../components/ServicesBanner";
import card2 from "../assets/images/card2.jpg";
import serviceCard from "../assets/images/service-card.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  let rows = [],
    i = 0,
    len = 8;
  while (++i <= len) rows.push(i);

  return (
    <>
      <ServicesBanner />
      <div className="service-info">
        <h1>Do you fancy visit our Services?!</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="services-list">
        {rows.map(() => {
          return (
            <div className="service">
              <div className="service-icon">
                <img alt="service-img" src={serviceCard} />
              </div>
              <div className="service-detail">
                <h4 className="service-title">Lorem Ipsum is simply text</h4>
                <p>Lorem Ipsum is simply dummy test text</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className='service-btn'>
        <Link to="/">
          <button>Back to Home Page</button>
        </Link>
      </div>
    </>
  );
};

export default Services;
