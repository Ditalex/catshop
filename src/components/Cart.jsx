import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext.jsx'
import CartItem from './CartItem.jsx'

export default function Cart(){
  const { cart, total, clearCart } = useContext(CartContext)
  if(cart.length === 0) return (
    <div className="container py-5 text-center">
      <h2>Carrito vacío</h2>
      <p className="text-muted">Agrega productos para continuar con tu compra.</p>
      <Link to="/" className="btn btn-primary">Ver productos</Link>
    </div>
  )
  return (
    <div className="container">
      <h2 className="mb-3">Tu carrito</h2>
      <div className="vstack gap-3 mb-3">
        {cart.map(i=> <CartItem key={i.id} item={i} />)}
      </div>
      <div className="d-flex justify-content-between align-items-center border-top pt-3">
        <p className="mb-0 fs-5">Total: <strong>${total.toFixed(2)}</strong></p>
        <div className="d-flex gap-2">
          <Link to="/checkout" className="btn btn-primary">Ir a pagar</Link>
          <button className="btn btn-outline-secondary" onClick={clearCart}>Vaciar</button>
        </div>
      </div>
    </div>
  )
}
