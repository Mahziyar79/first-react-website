import { withRouter, NavLink, Link } from "react-router-dom";
import logo from "../assets/images/white_logo.png";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "./Provider/CartProvider";

const items = [
  { to: "/", name: "Home", exact: true },
  { to: "/services", name: "Services" },
  { to: "/products", name: "Products" },
  { to: "/articles", name: "Articles" },
];
const Navigation = (props) => {
  const [barShow, setBarShow] = useState(false);
  const cartItemsNumber = useCart();

  return (
    <header className="nav">
      <div className="logo-cart">
        <Link to="/">
          <div className="site-logo">
            <img alt="logo" src={logo} />
          </div>
        </Link>
        <Link to="/cart">
          <div className="cart">
            <FaShoppingCart />
            <span className="cart-count">{cartItemsNumber.length}</span>
          </div>
        </Link>
        <div className="sign-up">
          <Link to="/signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
        </div>
      </div>
      <nav>
        <ul className={barShow ? "list-nav active-bar" : "list-nav"}>
          {items.map((item) => {
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  activeClassName="active-nav"
                  exact={item.exact || false}
                  onClick={() => setBarShow(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div onClick={() => setBarShow(!barShow)} className="bar-btn">
        <FaBars />
      </div>
    </header>
  );
};

export default withRouter(Navigation);
