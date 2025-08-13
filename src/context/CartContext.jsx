import React, { createContext, useMemo, useState } from 'react';
export const CartContext = createContext();

export function CartProvider({ children }){
  const [cart, setCart] = useState([]);

  function addItem(item, qty){
    setCart(prev => {
      const found = prev.find(p => p.id === item.id);
      if(found) return prev.map(p => p.id === item.id ? {...p, qty: p.qty + qty} : p);
      return [...prev, {...item, qty}];
    });
  }
  function removeItem(id){ setCart(prev => prev.filter(p => p.id !== id)); }
  function clearCart(){ setCart([]); }

  const total = useMemo(()=> cart.reduce((s,i)=> s + i.price * i.qty, 0), [cart]);
  const totalQty = useMemo(()=> cart.reduce((s,i)=> s + i.qty, 0), [cart]);

  const value = useMemo(()=>({ cart, addItem, removeItem, clearCart, total, totalQty }), [cart, total, totalQty]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
