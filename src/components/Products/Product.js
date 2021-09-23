import serviceCard from "../../assets/images/card3.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <div className="product-img">
        <img alt="product-img" src={serviceCard} />
      </div>
      <div className="pro-info">
        <h2>{product.title}</h2>
        <div className="pro-time">
          <AiOutlineClockCircle />
          <p>{product.time}</p>
        </div>
        <Link to={{ pathname: `/product/${product.id}`, state: { product } }}>
          <button className="pro-btn">More Information</button>
        </Link>
      </div>
    </>
  );
};

export default Product;
