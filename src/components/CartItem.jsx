import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext.jsx'

export default function CartItem({ item }){
  const { removeItem } = useContext(CartContext)
  return (
    <div className="d-flex gap-3 align-items-center border rounded p-2">
      <img src={item.image} alt={item.title} style={{width:90, height:90, objectFit:'cover', borderRadius:8}} />
      <div className="flex-grow-1">
        <h6 className="mb-1">{item.title}</h6>
        <small className="text-muted">Cantidad: {item.qty}</small>
      </div>
      <div className="text-end">
        <div className="fw-bold mb-2">${(item.price * item.qty).toFixed(2)}</div>
        <button className="btn btn-sm btn-outline-danger" onClick={()=>removeItem(item.id)}>Eliminar</button>
      </div>
    </div>
  )
}
