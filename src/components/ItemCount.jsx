import React, { useState } from 'react'

export default function ItemCount({ stock, initial=1, onAdd }){
  const [qty, setQty] = useState(initial)
  function inc(){ if(qty < stock) setQty(q=>q+1) }
  function dec(){ if(qty>1) setQty(q=>q-1) }
  return (
    <div className="d-flex align-items-center gap-2 mt-3">
      <button className="btn btn-outline-secondary" onClick={dec} aria-label="disminuir">-</button>
      <span className="quantity">{qty}</span>
      <button className="btn btn-outline-secondary" onClick={inc} aria-label="aumentar">+</button>
      <button className="btn btn-primary" onClick={()=>onAdd(qty)}>Agregar al carrito</button>
    </div>
  )
}
