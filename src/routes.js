import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Articles from "./Pages/Articles";
import NotFoundPage from "./Pages/NotFoundPage";
import ArticlesPage from "./Pages/ArticlesPage";
import ProductPage from "./Pages/ProductPage";
import Products from "./Pages/Products";
import CartPage from "./Pages/CartPage";

const routes = [
  { path: "/article/:id", component: ArticlesPage },
  { path: "/product/:id", component: ProductPage },
  { path: "/cart", component: CartPage },
  { path: "/services", component: Services },
  { path: "/products", component: Products },
  { path: "/articles", component: Articles },
  { path: "/", component: Home, exact: true },
  { component: NotFoundPage },
];

export default routes;
