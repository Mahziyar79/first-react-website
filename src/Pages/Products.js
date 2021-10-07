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

const prices = [
  { value: "Low", label: "Low to High" },
  { value: "High", label: "High to Low" },
];

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [selectPrice, setSelectPrice] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeInputSearchHandler = (e) => {
    setSearch(e.target.value);
  };
  const selectInputSearchHandler = (e) => {
    setSelectOption(e.value);
  };
  const priceInputSearchHandler = (e) => {
    setSelectPrice(e.value);
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
        <div className='select-input'>
        <Select options={options} onChange={selectInputSearchHandler} placeholder= 'Category...'/>
        <Select options={prices} onChange={priceInputSearchHandler} placeholder= 'Price...'/>
        </div>
      </div>
      <AllProductsSearch
        search={search}
        selectOption={selectOption}
        selectPrice={selectPrice}
      />
    </>
  );
};

export default Products;
