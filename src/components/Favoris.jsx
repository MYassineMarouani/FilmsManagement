import React, { useContext } from 'react'
import { Store } from '../context/StoreProvider'

export default function Favoris() {
  const { favoris } = useContext(Store)
  
  return (
    <div className='container'>
      <div className='row my-3'>
        {favoris.map((film, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img src={film?.image} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{film?.titre}</h5>
              <p className="card-text">{film?.date}</p>
 
            </div>
          </div>

        ))}
      </div>
    </div>
  )

}
