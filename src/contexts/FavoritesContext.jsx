import { useState, createContext, useEffect } from 'react'


// create context

export const FavoritesContext = createContext()

export default function FavoritesContextProvider(props) {
   
    const [favorites, setFavorites] = useState([])

    useEffect(
        ()=>{
            // when page loads, check if there is value in local storage
            const storedFavorites = localStorage.getItem('favoritesList')
            // if there was a value, use it

            if (storedFavorites) {
                setFavorites(JSON.parse(storedFavorites))
            }
        },[]
    )



    useEffect(
        ()=>{
            localStorage.setItem('favoritesList', JSON.stringify(favorites))
        },[favorites]
    )



    // this function will add a property to the list

    const addProperty = (propToAdd) => {
        console.log('adding', propToAdd)
        //verify that i have the data of the property to add
        let newFavorites = [...favorites, propToAdd]
        console.log(newFavorites)
        //update state
        setFavorites(newFavorites)
    }

    const removeProperty = (propertyId) => {
        console.log('remove', propertyId)
        // use filter to KEEP all that are not propertyId
        let newFavorites = favorites.filter(item => item._id !== propertyId)
        console.log(newFavorites)
        // update state
        setFavorites(newFavorites)
    }


    return (
        <FavoritesContext.Provider value={{favorites, addProperty, removeProperty}} >
            {props.children}
        </FavoritesContext.Provider>
    )
}