import { Link } from "react-router-dom";
import card2 from "../assets/images/card2.jpg";

const Cards = ({ cards }) => {
  return (
    <div className="main-card">
      <div className="title-cards-above">
        <h2>Check our these EPIC destinations</h2>
      </div>
      <div className="cards">
        {cards.map((card) => {
          return (
            <div className="card">
              <div key={card.id}>
                <div className="image-card">
                  <img alt="card-img" src={card2} />
                  <p>{card.category}</p>
                </div>
                <Link to={{pathname:`/product/${card.id}`,state:{card}}}>
                  <div className="card-title">
                    <h4>{card.title}</h4>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
