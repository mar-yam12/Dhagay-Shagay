import { useCart } from './CartProvider';

const CartPage = () => {
  const { items, removeItem, clearCart } = useCart();

  return (
    <div className="cart-page">
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      {items.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
    </div>
  );
};

export default CartPage;