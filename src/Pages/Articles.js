import ProductsBanner from "../components/ArticlesBanner";
import { cards } from "../data/cards";
import Cards from "../components/Cards";
import { useEffect } from "react";

const Articles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      <ProductsBanner />
      <Cards cards={cards} />
    </>
  );
};

export default Articles;
