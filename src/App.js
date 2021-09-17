import "./App.css";
import './assets/responsive.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            {routes.map((route) => (
              <Route key={Math.floor(Math.random() * 1000)} {...route} />
            ))}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
