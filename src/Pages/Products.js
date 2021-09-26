import { useEffect } from "react";
import AllProductsSearch from "../components/Products/AllProductsSearch";
import { useState } from "react";

const Products = () => {
  const [search, setSearch] = useState("");


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeInputSearchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="search-product">
        <input
          type="text"
          placeholder="search product..."
          value={search}
          onChange={changeInputSearchHandler}
        ></input>
      </div>
      <AllProductsSearch search={search} />
    </>
  );
};

export default Products;
