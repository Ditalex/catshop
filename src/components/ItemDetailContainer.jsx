import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'
import { fetchProductById } from '../utils/api.js'

export default function ItemDetailContainer(){
  const { id } = useParams();
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(()=>{
    setLoading(true)
    fetchProductById(id)
      .then(d=> setItem(d))
      .catch(err=> setError(err?.message || 'Producto no encontrado'))
      .finally(()=> setLoading(false))
  },[id])

  if(loading) return <div className="container py-5 text-center">Cargando...</div>
  if(error) return <div className="container"><div className="alert alert-danger">{error}</div></div>
  if(!item) return <div className="container">Producto no encontrado</div>

  return <div className="container"><ItemDetail item={item} /></div>
}
