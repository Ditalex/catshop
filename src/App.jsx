import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Cart from './components/Cart.jsx'
import CheckoutForm from './components/CheckoutForm.jsx'

export default function App(){
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <main className="container py-4">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  )
}
