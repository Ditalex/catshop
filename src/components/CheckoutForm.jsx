import React, { useContext, useState } from 'react'
import { createOrder } from '../utils/api.js'
import { CartContext } from '../context/CartContext.jsx'

export default function CheckoutForm(){
  const { cart, total, clearCart } = useContext(CartContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const disabled = loading || cart.length === 0

  async function handleSubmit(e){
    e.preventDefault();
    if(disabled) return;
    setLoading(true)
    const order = {
      buyer: { name, email, phone },
      items: cart,
      total,
      createdAt: new Date()
    }
    try{
      const id = await createOrder(order)
      setOrderId(id)
      clearCart()
    }catch(err){ console.error(err) }
    setLoading(false)
  }

  if(orderId) return (
    <div className="container py-5 text-center">
      <h3>¡Gracias por tu compra!</h3>
      <p>Orden creada: <code>{orderId}</code></p>
    </div>
  )

  return (
    <div className="container">
      <form className="row g-3" onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <div className="col-12 col-md-6">
          <label className="form-label">Nombre</label>
          <input className="form-control" placeholder="Tu nombre" value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div className="col-12 col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="tucorreo@dominio.com" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
        <div className="col-12 col-md-6">
          <label className="form-label">Teléfono</label>
          <input className="form-control" placeholder="+57 300 000 0000" value={phone} onChange={e=>setPhone(e.target.value)} required />
        </div>
        <div className="col-12 d-flex justify-content-between align-items-center">
          <p className="mb-0">Total a pagar: <strong>${total.toFixed(2)}</strong></p>
          <button className="btn btn-primary" disabled={disabled} type="submit">{loading ? 'Procesando...' : 'Pagar'}</button>
        </div>
      </form>
    </div>
  )
}
