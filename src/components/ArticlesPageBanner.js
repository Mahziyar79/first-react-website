const ProductPageBanner = ({card}) => {
  return (
    <div className="main-banner Home-banner product-page-bannner">
      <h1>{card.title}</h1>
      <div className="banner-btns">
        <button>GET STARTED</button>
        <button>WATCH TRAILER</button>
      </div>
    </div>
  );
};

export default ProductPageBanner;
