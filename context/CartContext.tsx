'use client'

import React, { createContext, useContext, useReducer, ReactNode } from 'react'

interface CartItemType {
  id: string
  name: string
  price: number
  image: string
  color: string
  size: string
  quantity: number
}

const CartContext = createContext<{
  state: { items: CartItemType[] }
  dispatch: React.Dispatch<any>
} | undefined>(undefined)

const initialState: { items: CartItemType[] } = { items: [] }

type CartAction =
  | { type: 'ADD'; payload: CartItemType }
  | { type: 'REMOVE'; payload: { id: string } }

function cartReducer(state: typeof initialState, action: CartAction) {
  switch (action.type) {
    case 'ADD':
      return { ...state, items: [...state.items, action.payload] }
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter(item =>
          item.id !== action.payload.id
        )
      }
    default:
      return state
  }
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
