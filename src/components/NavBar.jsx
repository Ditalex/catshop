import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext.jsx'
import CartWidget from './CartWidget.jsx'

export default function NavBar(){
  const { totalQty } = useContext(CartContext)
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">CatShop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCats">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navCats">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Productos</Link></li>
          </ul>
          <CartWidget count={totalQty} />
        </div>
      </div>
    </nav>
  )
}
