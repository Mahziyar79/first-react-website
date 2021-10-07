import Product from "./Product";
import { products } from "../../data/products";
import { useState, useEffect } from "react";

const AllProductsSearch = ({ search, selectOption }) => {
  const [searchData, setSearchData] = useState(products);
  const [selectData, setSelectData] = useState(products);
  const [selectSupport, setSelectSupport] = useState(selectData);

  useEffect(() => {
    if (selectOption !== "") {
      setSelectSupport(
        products.filter((pro) =>
          pro.category
            .toLowerCase()
            .includes(selectOption ? selectOption.toLowerCase() : null)
        )
      );
    } else {
      setSelectSupport(products);
    }
  }, [selectOption]);

  useEffect(() => {
    if (search !== "") {
      setSelectSupport(
        selectData.filter((pro) =>
          pro.title.toLowerCase().includes(search ? search.toLowerCase() : null)
        )
      );
    } else {
      setSelectSupport(selectSupport);
    }
  }, [search]);

  return (
    <>
      <div className="title-cards-above">
        <h2>Products</h2>
        <div className="divider"></div>
      </div>
      <div className="products">
        {selectSupport ? (
          selectSupport.map((product) => (
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
