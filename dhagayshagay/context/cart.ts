import { create } from "zustand";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (_id: string) => void;
  increaseQty: (_id: string) => void;
  decreaseQty: (_id: string) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((p) => p._id === item._id);
      if (existing) {
        return {
          cart: state.cart.map((p) =>
            p._id === item._id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      } else {
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }
    }),
  removeFromCart: (_id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== _id),
    })),
  increaseQty: (_id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decreaseQty: (_id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item._id === _id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    })),
  clearCart: () => set({ cart: [] }),
}));
