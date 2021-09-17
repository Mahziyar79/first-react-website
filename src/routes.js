import Home from './Pages/Home'
import Services from './Pages/Services'
import Products from './Pages/Products'
import NotFoundPage from "./Pages/NotFoundPage";
import ProductPage from './Pages/ProductPage';


const routes = [
    {path : "/product/:id" , component : ProductPage},
    {path : "/services" , component : Services},
    {path : "/articles" , component : Products},
    {path : '/' , component : Home , exact : true},
    {component : NotFoundPage},
]


export default routes