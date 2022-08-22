import React, { useContext } from 'react'
import { Store } from '../context/StoreProvider'

export default function Accueil()  {
 const {films,setFavoris,favoris} = useContext(Store)

const onClick = (obj) => {

  setFavoris([...favoris,obj])
}

    return (
      <div className='container'>
           <div className='row'> 
        {films.map((film,index) => (
        <div key={index} className="card" style={{width:"18rem"}}>
        <img src={film?.image} class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{film?.titre}</h5>
          <p className="card-text">{film?.date}</p>
          <button onClick={() => onClick(film)} className="btn btn-primary">Favoris</button>
        </div>
      </div>  
        ))}
        </div>
      </div>
    )
  
}
