'use client';

import { useCart } from '@/context/cart';
import { useState } from 'react';
import { client } from '@/lib/sanity';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', address: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const order = {
      _type: "order",
      customerName: form.name,
      email: form.email,
      address: form.address,
      items: cart,
      createdAt: new Date().toISOString()
    };

    try {
      await client.create(order);
      setSubmitted(true);
      clearCart();
    } catch (e) {
      alert("❌ Failed to place order.");
    }
  };

  if (submitted) {
    return <p className="p-6 text-green-600">✅ Order placed and saved to Sanity!</p>;
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          required
          placeholder="Full Name"
          className="w-full border p-2 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          required
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          required
          placeholder="Shipping Address"
          className="w-full border p-2 rounded"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        <button type="submit" className="w-full bg-black text-white py-2 rounded">
          Place Order
        </button>
      </form>
    </div>
  );
}
