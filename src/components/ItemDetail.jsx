import React, { useContext } from 'react'
import ItemCount from './ItemCount.jsx'
import { CartContext } from '../context/CartContext.jsx'

export default function ItemDetail({ item }){
  const { addItem } = useContext(CartContext)
  function onAdd(qty){ addItem(item, qty) }

  return (
    <div className="row g-4 align-items-start">
      <div className="col-12 col-lg-6">
        <img className="detail-img" src={item.image} alt={item.title} />
      </div>
      <div className="col-12 col-lg-6">
        <h2 className="mb-1">{item.title}</h2>
        <div className="d-flex gap-2 align-items-center mb-2">
          <span className="price fs-4">${item.price.toFixed(2)}</span>
          <span className="badge badge-neutral">{item.stock} en stock</span>
        </div>
        <p className="text-muted">{item.description}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  )
}
