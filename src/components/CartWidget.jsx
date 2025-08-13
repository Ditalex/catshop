import React from 'react'
import { Link } from 'react-router-dom'

export default function CartWidget({ count=0 }){
  return (
    <Link to="/cart" className="btn btn-outline-secondary d-flex align-items-center gap-2">
      <span className="bi bi-bag"></span>
      <span>Carrito</span>
      <span className="badge badge-neutral rounded-pill">{count}</span>
    </Link>
  )
}
