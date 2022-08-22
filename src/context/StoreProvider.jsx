import React, { createContext ,useState} from 'react'

export const Store = createContext({
    films:[],
    setFilms: () => {},
    favoris:[],
    setFavoris: () => {}
})


const StoreProvider = ({children}) => {
    const [films,setFilms] = useState([])
    const [favoris,setFavoris] = useState([])

  const values = {films,favoris,setFilms,setFavoris}  
  return (
    <Store.Provider value={values}>{children}</Store.Provider>
  )
}

export default StoreProvider