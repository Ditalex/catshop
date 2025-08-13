import React from 'react'
import { Link } from 'react-router-dom'

export default function Item({ item }){
  return (
    <article className="card h-100">
      <img className="cat-thumb" src={item.image} alt={item.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text text-muted flex-grow-1">{item.short}</p>
        <div className="d-flex justify-content-between align-items-center">
          <span className="price">${item.price.toFixed(2)}</span>
          <Link to={`/product/${item.id}`} className="btn btn-primary">Ver</Link>
        </div>
      </div>
    </article>
  )
}
