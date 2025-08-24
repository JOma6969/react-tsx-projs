import { useCartStore } from "./store";

const Cart = () => {
  const cartItems = [
    "Iphone 13",
    "iphone 11",
    "headphone XX-Max",
    "Manga",
    "Samsung",
    "Infinix",
    "tecno",
    "smart watch",
    "fridge",
    "pc",
    "computer",
  ];

  const cart = useCartStore((state) => state.cart);
  const addCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      <h2 className="font-semibold text-4xl mb-10">Products</h2>
      <ul>
        {cartItems.map((item, i) => (
          <li className="grid grid-cols-[200px_1fr]" key={i}>
            <p>{item}</p>
            <button className="text-left" onClick={() => addCart(cartItems[i])}>
              Add to cart
            </button>
          </li>
        ))}
      </ul>
      <h2 className="font-semibold text-3xl mt-20">Cart</h2>
      {cart.length > 0 ? (
        cart.map((item, i) => <p key={i}>{item}</p>)
      ) : (
        <p>Empty Cart</p>
      )}
    </div>
  );
};

export default Cart;
