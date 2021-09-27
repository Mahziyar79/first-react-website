import courseimg from "../assets/images/card2.jpg";
import { useEffect } from "react";
import { useCart, useCartAction } from "../components/Provider/CartProvider";
import { useToasts } from "react-toast-notifications";

const ProductPage = (props) => {
  const { addToast } = useToasts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = props.location.state.product;
  const cart = useCart();
  const setCart = useCartAction();
  const addProduct = () => {
    const isExistProduct = cart.find((p) => p.id === product.id);
    if (isExistProduct) {
      alert("choose another product");
      return;
    }
    setCart([...cart, product]);
    addToast("Product Added to Cart", { appearance: "success",autoDismiss:'true' });
  };

  return (
    
      <div className="product-body">
        <div className="product-body-top">
          <div className="product-detail-body">
            <p>Price : {product.price} $</p>
            <p>Course duration : {product.time}</p>
            <button onClick={addProduct} className="buy-btn">
              Buy Now
            </button>
          </div>
          <div className="product-main-body">
            <div className="course-title">
              <h1>{product.title}</h1>
            </div>
            <div className="course-img">
              <img alt="course-img" src={courseimg} />
            </div>
          </div>
        </div>
        <div className="product-body-bottom">
          <div className="course-info">
            <h3>Description</h3>
            <p>{product.info}</p>
          </div>
        </div>
      </div>
    
  );
};

export default ProductPage;
