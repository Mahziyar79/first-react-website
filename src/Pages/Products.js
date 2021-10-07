import { useEffect } from "react";
import AllProductsSearch from "../components/Products/AllProductsSearch";
import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "", label: "All" },
  { value: "Travel", label: "Travel" },
  { value: "Travel items", label: "Travel items" },
  { value: "Equipment", label: "Equipment" },
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectOption, setSelectOption] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeInputSearchHandler = (e) => {
    setSearch(e.target.value);
  };
  const selectInputSearchHandler = (e) => {
    setSelectOption(e.value);
  };


  return (
    <>
      <div className="search-product">
        <input
          type="text"
          placeholder="Search on All Products..."
          value={search}
          onChange={changeInputSearchHandler}
        ></input>
        <Select options={options} onChange={selectInputSearchHandler} />
      </div>
      <AllProductsSearch search={search} selectOption={selectOption}/>
    </>
  );
};

export default Products;
