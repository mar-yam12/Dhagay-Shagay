'use client';

import { useCart } from '@/context/cart';
import Image from 'next/image';

export default function CartPage() {
  const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce((acc, item ) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item._id} className="flex items-center justify-between border p-4 rounded">
                <div className="flex items-center gap-4">
                  <Image src={item.image} alt={item.name} width={60} height={60} className="rounded" />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <div className="flex gap-2 items-center mt-1">
                      <button
                        onClick={() => decreaseQty(item._id)}
                        className="px-2 py-1 border rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increaseQty(item._id)}
                        className="px-2 py-1 border rounded"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm text-gray-500">Rs. {item.price * item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-600 text-sm underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Total: Rs. {total}</h2>
            <button onClick={clearCart} className="mt-2 px-4 py-2 bg-red-500 text-white rounded">
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
