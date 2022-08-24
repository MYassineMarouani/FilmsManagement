import React, { useContext } from 'react'
import { Store } from '../context/StoreProvider'
import { useState } from 'react'

export default function Accueil() {
  const { films, setFavoris, favoris } = useContext(Store)

  const onClick = (obj) => {

    setFavoris([...favoris, obj])
  }
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);

  };
  const filteredData = films.filter((el) => {
    if (inputText === '') {
      return el;
    } else {
      return el.titre.toLowerCase().includes(inputText)
    }
  })

  return (
    <div className='container'>
      <br />
      <input onChange={inputHandler} type="text" class="form-control" placeholder='Search...' />
      <br />
      <div className='row'>
        {filteredData.map((film, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img src={film?.image} class="card-img-top" alt="..." />
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
