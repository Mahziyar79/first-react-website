import serviceCard from "../assets/images/service-card.png";

const ServiceBox = ({ count }) => {
  count = parseInt(count);
  let rows = [],
    i = 0;

  while (++i <= count) rows.push(i);
  return (
    <div className="services-list">
      {rows.map(() => {
        return (
          <div className="service" key={Math.floor(Math.random()*1000)}>
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
  );
};

export default ServiceBox;
