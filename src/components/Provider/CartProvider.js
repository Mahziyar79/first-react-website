import { useState, createContext, useContext } from "react";

const CartItemContext = createContext();
const CartItemContextDispature = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      category: "Travel",
      title: "Travel Bag",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl eros, rutrum vel pharetra in, tempor id ligula. Donec interdum ipsum libero, et convallis elit auctor nec. Vivamus vestibulum lectus at nunc gravida, pretium lacinia ipsum rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc feugiat diam ut efficitur tempus. Sed eros est, condimentum ut quam ac, ullamcorper laoreet neque. Nulla justo justo, porttitor vel est id, imperdiet rhoncus mi. Suspendisse facilisis eget dolor mattis semper.Nulla mattis pretium erat sit amet tempus. Nam nec posuere quam. Nam lobortis mi ac mauris porta pellentesque. Curabitur posuere eros at pellentesque auctor. Nulla iaculis porta tempus. Nam felis mi, gravida nec mollis et, finibus sit amet dui. Praesent interdum, ex non suscipit blandit, libero libero molestie risus, et fringilla felis diam vel mauris. Phasellus rhoncus a lacus sed tempor. Morbi nec pulvinar nulla, eget feugiat justo. Cras tincidunt diam sed libero molestie ullamcorper. Duis ac neque quis urna auctor sodales et semper nulla.Nam in tortor suscipit, tempus nibh vel, dignissim ipsum. Aliquam purus libero, venenatis in malesuada eu, sodales eu dui. Morbi fringilla turpis sit amet augue aliquet blandit ut quis augue. Etiam semper tincidunt ornare. Nullam fringilla purus vitae risus fringilla, eget suscipit purus iaculis. Ut malesuada ipsum vel neque tristique, eu rutrum mauris commodo. Phasellus porttitor dignissim justo et iaculis.Nullam ac dictum enim, rutrum placerat lacus. Pellentesque a laoreet sapien, sed pretium sapien. Maecenas quam justo, sollicitudin non pellentesque ut, cursus sed nibh. Duis scelerisque tincidunt orci, non volutpat nisi sodales ac. Nam rhoncus libero ac magna gravida, at aliquam sem cursus. Praesent quis ultrices magna. Etiam ac volutpat tortor. Vivamus nec orci sit amet sapien vulputate elementum. Vestibulum eros urna, condimentum mollis purus vel, laoreet porttitor erat. Aenean quis ullamcorper neque, et lobortis nisi. Proin felis orci, placerat ut rhoncus in, suscipit eget sem. Phasellus id dui tempus, dapibus ante non, porttitor dui. Sed sit amet augue odio. Integer molestie eget sapien ac tempor. Sed rhoncus nisl eget nibh interdum rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce vitae rutrum eros, quis aliquet nisl. Sed accumsan vel enim sodales ultricies. Curabitur ullamcorper tempus aliquam. Proin non arcu ut lacus posuere ultricies. Vestibulum ac porta libero. Vivamus convallis dui a nibh sodales cursus. Donec venenatis a dui a aliquet. Praesent sit amet sollicitudin leo, at commodo tortor. ",
      time: "20 hours",
      price: "249 $",
    },
  ]);

  return (
    <CartItemContext.Provider value={cartItems}>
      <CartItemContextDispature.Provider value={setCartItems}>
        {children}
      </CartItemContextDispature.Provider>
    </CartItemContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartItemContext);
export const useCartAction = () => useContext(CartItemContextDispature);
