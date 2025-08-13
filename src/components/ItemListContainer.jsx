import React, { useEffect, useState } from 'react'
import ItemList from './ItemList.jsx'
import { fetchProducts } from '../utils/api.js'

export default function ItemListContainer(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    fetchProducts()
      .then(data=> setItems(data))
      .catch(err=> setError(err?.message || 'Error cargando productos'))
      .finally(()=> setLoading(false))
  },[])

  if(loading) return <div className="container py-5"><div className="text-center">Cargando productos...</div></div>
  if(error) return <div className="alert alert-danger">{error}</div>

  return (
    <section className="container">
      <div className="d-flex justify-content-between align-items-end mb-3">
        <div>
          <h2 className="mb-0">Artículos para gatos</h2>
          <small className="text-muted">Top 10 esenciales para tu gato</small>
        </div>
      </div>
      <ItemList items={items} />
    </section>
  )
}
