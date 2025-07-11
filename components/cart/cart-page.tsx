'use client';

import Link from 'next/link';
import { ChevronRight, ShoppingBag } from 'lucide-react';
import { CartItem } from './cart-item';
import { OrderSummary } from './order-sumary';
import { cn } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { removeFromCart, updateQuantity } from '@/app/actions/cart';

type CartItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  size: string;
  image: string;
  // add other fields as needed
};

export function CartPage() {
  const { state, dispatch } = useCart();

  const subtotal = Number(
    state.items.reduce((total: number, item: CartItemType) => total + item.price * item.quantity, 0).toFixed(2)
  );

  const discountRate = 0.014;
  const discount = Number((subtotal * discountRate).toFixed(2));
  const deliveryFee = 15;
  const total = Number((subtotal - discount + deliveryFee).toFixed(2));

  const handleUpdateQuantity = (id: string, color: string, size: string, newQuantity: number) => {
    const item = state.items.find((item: CartItemType) => item.id === id && item.color === color && item.size === size);
    if (item) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string, color: string, size: string) => {
    removeFromCart(id);
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center">
        <ShoppingBag className="h-24 w-24 text-gray-300 mb-4" />
        <h2 className={cn("text-2xl font-bold mb-2")}>Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
        <Link 
          href="/products" 
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-gray-800">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-800">Cart</span>
        </div>

        <h1 className={cn("text-3xl lg:text-4xl font-bold mb-8")}>
          YOUR CART
        </h1>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
              {state.items.map((item: CartItemType) => (
                <CartItem
                  key={`${item.id}-${item.color}-${item.size}`}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  color={item.color}
                  size={item.size}
                  image={item.image}
                  onUpdateQuantity={(newQuantity) => handleUpdateQuantity(item.id, item.color, item.size, newQuantity)}
                  onRemove={() => handleRemoveItem(item.id, item.color, item.size)}
                />
              ))}
              ))
            </div>
          </div>

          <div className="lg:col-span-5 mt-8 lg:mt-0">
            <OrderSummary
              subtotal={subtotal}
              discount={discount}
              deliveryFee={deliveryFee}
              total={total}
            />
          </div>
        </div>
      </div>
    // </div>
  );
}
