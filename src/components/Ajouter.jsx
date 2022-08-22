import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Store } from '../context/StoreProvider'

const Ajouter = () => {
  const { films, setFilms } = useContext(Store)
  const navigate = useNavigate()
  const [titre, setTitre] = useState('')
  const [image, setImage] = useState('')
  const [date, setDate] = useState('')

  const initialErrorState = {
    titre: '',
    date: '',
    image: ''
  };

  const [errorRequiredInputs, setInputsRequired] = useState(initialErrorState);

  const onSubmit = (e) => {
    e.preventDefault()
    if (!titre) setInputsRequired({ ...errorRequiredInputs, titre: 1 });
    if (!image) setInputsRequired({ ...errorRequiredInputs, image: 1 });
    if (!date) setInputsRequired({ ...errorRequiredInputs, date: 1 });

    if (titre && image && date) {
      setInputsRequired(initialErrorState);

      const newFilm = { titre, image, date }
      setFilms([...films, newFilm])
      navigate('/Accueil')
    }
  }

  return (
    <div className='container'>
      <span>
        Les champs suivant sont obligatoire :
      </span>
      <form onSubmit={onSubmit}>
        <div class="mb-3" style={{ width: '500px', marginLeft: '500px' }}>
          <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '30px' }}>Titre</label>
          <br />
          <input onChange={(e) => setTitre(e.target.value)} value={titre} type="text" class="form-control" />{errorRequiredInputs["titre"] && <span>titre est obligatoire <br /></span>}
          <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '30px' }}>Image</label>
          <br />
          <input onChange={(e) => setImage(e.target.value)} value={image} type="text" class="form-control" />{errorRequiredInputs["image"] && <span>Image est obligatoire <br /></span>}
          <label for="exampleInputEmail1" class="form-label" style={{ fontSize: '30px' }}>Date</label>
          <input  onChange={(e) => setDate(e.target.value)} value={date} type="text" class="form-control" />{errorRequiredInputs["date"] && <span> Date est obligatoire <br /></span>}
          <br />
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>


      </form>

    </div>
  )
}

export default Ajouter