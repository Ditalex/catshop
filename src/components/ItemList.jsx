import React from 'react'
import Item from './Item.jsx'

export default function ItemList({ items }){
  return (
    <div className="row g-3">
      {items.map(i=> (
        <div className="col-12 col-sm-6 col-lg-4" key={i.id}>
          <Item item={i} />
        </div>
      ))}
    </div>
  )
}
