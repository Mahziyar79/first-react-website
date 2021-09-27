import "./App.css";
import "./assets/responsive.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";
import Layout from "./Layout/Layout";
import CartProvider from "./components/Provider/CartProvider";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ToastProvider>
          <BrowserRouter>
            <Layout>
              <Switch>
                {routes.map((route) => (
                  <Route key={Math.floor(Math.random() * 1000)} {...route} />
                ))}
              </Switch>
            </Layout>
          </BrowserRouter>
        </ToastProvider>
      </CartProvider>
    </div>
  );
}

export default App;
