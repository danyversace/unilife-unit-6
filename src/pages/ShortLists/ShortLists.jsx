import React, {useContext} from 'react'
import './ShortLists.css'
import CityCard from '../../components/CityCard/CityCard'

import Shortlist from '../../contexts/ShortlistContext'

function ShortLists() {


    const {shortList} = useContext(FavoritesContext)

  return (
    <div>
        <h1>Shortlist</h1>
         <div className='favorites-characters'>
                {   
                    shortList.length > 0 ?
                    shortList.map(item => <CityCard key={item.id} 
                            property={item}/>)
                            :
                            <p>You dont have any favority characters yet</p>
                }
            </div>
    </div>
  )
}

export default ShortLists