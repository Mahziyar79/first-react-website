import { withRouter, NavLink, Link } from "react-router-dom";
import logo from "../assets/images/white_logo.png";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const items = [
  { to: "/", name: "Home", exact: true },
  { to: "/services", name: "Services" },
  { to: "/articles", name: "Articles" },
];
const Navigation = (props) => {
  const [barShow, setBarShow] = useState(false);

  return (
    <header className="nav">
      <Link to="/">
        <div className="site-logo">
          <img alt="logo" src={logo} />
        </div>
      </Link>
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
