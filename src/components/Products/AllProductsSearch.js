
import Product from "./Product";
import { products } from "../../data/products";
import { useState, useEffect } from "react";
import _ from "lodash"

const AllProductsSearch = ({ search, selectOption,selectPrice }) => {
  const [selectSupport, setSelectSupport] = useState(products);

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
        products.filter((pro) =>
          pro.title.toLowerCase().includes(search ? search.toLowerCase() : null)
        )
      );
    } else {
      setSelectSupport(products);
    }
  }, [search]);


  useEffect(() => {
    if(selectPrice==="Low"){
      setSelectSupport( _.orderBy(products, ['price'],['asc']));
   }else{
      setSelectSupport( _.orderBy(products, ['price'],['desc']));
   }
  }, [selectPrice]);


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