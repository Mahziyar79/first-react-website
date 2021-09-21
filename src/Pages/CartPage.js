import { Link } from "react-router-dom";
import { useCart } from "../components/Provider/CartProvider";

const CartPage = () => {
  const cartitems = useCart();
  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      <table id="cart">
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {cartitems.map((item) => (
          <tr>
            <td>
              {item.title} ({item.category})
            </td>
            <td>1</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </table>
      <div className="home-btn">
        <Link to="/">
          <button>Back to Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
