import React, {useContext} from 'react'
import './Favorites.css'

import HomeCard from '../../components/HomeCard/HomeCard'

import { FavoritesContext } from '../../contexts/FavoritesContext'


function Favorites() {
    // get the global state
    //NOTE {} NOT []

    const {favorites} = useContext(FavoritesContext)




  return (
    <div className='favorites-container'>
        <div className='favorites-container-top'>
        <h1>My Favorites Properties</h1>
        </div>
        <div className='favorites-properties'>
                {
                    favorites.length > 0 ?
                    favorites?.map((item) => <HomeCard key={item.id} property={item}/>)
                    :
                    <h2>No Favorite Properties</h2>
                }
        </div>
    </div>
  )
}

export default Favorites