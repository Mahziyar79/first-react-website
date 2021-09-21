import { Link } from "react-router-dom";
import card2 from "../assets/images/card2.jpg";

const Cards = ({ cards }) => {
  return (
    <div className="main-card">
      <div className="title-cards-above">
        <h2>Articles</h2>
        <div className="divider"></div>
      </div>
      <div className="cards">
        {cards.map((card, index) => {
          return (
            <div className="card" key={index}>
              <div key={card.id}>
                <div className="image-card">
                  <img alt="card-img" src={card2} />
                  <p>{card.category}</p>
                </div>
                <Link to={{ pathname: `/article/${card.id}`, state: { card } }}>
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
