import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart, useCartAction } from "../components/Provider/CartProvider";
import { FaTrashAlt } from "react-icons/fa";


const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cartItems = useCart();
  const setCartItems = useCartAction();

  const deleteCartItem = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredItems);
  };

  return (
    <>
    <div className="cart-page">
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <>
          <h2 className="empty-h2">Your Cart is empty</h2>
          <div className="home-btn">
            <Link to="/">
              <button>Back to Home Page</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <table id="cart">
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {cartItems.map((item) => (
              <tr>
                <td>
                  {item.title} (category : {item.category})
                </td>
                <td>1</td>
                <td className="price-trash">
                  {item.price}
                  <FaTrashAlt onClick={() => deleteCartItem(item.id)} />
                </td>
              </tr>
            ))}
          </table>
          <div className="payment-btn">
            <Link to="/">
              <button>Payment</button>
            </Link>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default CartPage;
