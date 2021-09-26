import Product from "./Product";
import { products } from "../../data/products";

const AllProducts = () => {
  return (
    <>
      <div className="title-cards-above">
        <h2>Products</h2>
        <div className="divider"></div>
      </div>
      <div className="products">
        {products ? (
          products.map((product) => (
            <div className="product" key={product.id}>
              <Product product={product} />
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default AllProducts;
