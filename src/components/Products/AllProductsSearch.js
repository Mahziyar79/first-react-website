import Product from "./Product";
import { products } from "../../data/products";
import { useState, useEffect } from "react";

const AllProductsSearch = ({ search }) => {
  const [datas, setDatas] = useState(products);

  useEffect(() => {
    if (search !== "") {
      setDatas(
        products.filter((pro) =>
          pro.title.toLowerCase().includes(search ? search.toLowerCase() : null)
        )
      );
    } else {
      setDatas(products);
    }
  }, [search]);

  return (
    <>
      <div className="title-cards-above">
        <h2>Products</h2>
        <div className="divider"></div>
      </div>
      <div className="products">
        {datas ? (
          datas.map((product) => (
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

export default AllProductsSearch;
