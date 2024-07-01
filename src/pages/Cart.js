import { useSelector } from "react-redux";
import { CartCards } from "../components";
export const Cart = () => {
  // Get the cart data from Redux store.
  const cartList = useSelector((state) => state.cartState.cartList);
  console.log(cartList);
  const total = useSelector((state) => state.cartState.total);

  return (
    <section className="max-w-7x1 mx-auto py-7">
      <h1>
        Cart Items: {cartList.length} / <b>${total}</b>
      </h1>
      <div className="flex justify-center flex-wrap other:justify-evenly">
        {cartList.map((product) => (
          <CartCards key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
