import ProductsBanner from "../components/ProductsBanner";
import { cards } from "../data/cards";
import Cards from "../components/Cards";

const Products = () => {
  return (
    <>
      <ProductsBanner />
      <Cards cards={cards} />
    </>
  );
};

export default Products;
