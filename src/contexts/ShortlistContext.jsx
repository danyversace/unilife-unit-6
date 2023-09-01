// import {useState, createContext, useEffect} from 'react';



// // create context
// export const ShortlistContext = createContext()

// export default function ShortlistContext(props){
//     //create a global state
//     const [shortList, setShortList] = useState([])


    
//     useEffect(
//         ()=> {
//             //when page loads, check if there is value in localStorage
//             const storedShortList = localStorage.getItem('shortList')
//             console.log(storedShortList)
//             //if there was a value use it
//             if (storedShortList) {
//                 setShortList(JSON.parse(storedShortList))
//             }
//         },[]
//     )
    

//     //needs useEffect that runs whenever shotlist changes

//     // useEffect(
//     //     ()=> {
//     //        // console.log('darkMode now', darkMode)
//     //         // save current state to localStorage
//     //         localStorage.setItem('shortList', JSON.stringify(shortList))

//     //     }, [shortList] // runs anytime darkMode changes
//     // )

    

//     //need a function to add a property to a state

//     const addProperty = (propToAdd) => {
//         console.log('adding', propToAdd)
//         // add proptoadd to shortList
//         let newList = [...shortList, propToAdd]
//         console.log(newList)
//         //update state
//         setShortList(newList)
//     }

//     const removeProp = (propId) => {
//         console.log('removing', propId)
//         // remove this property from shortlist
//         let newList = favorites.filter(item=>item.id != propId)
//         //update state
//         setShortList(newList)

//     }

//     return(
//         <ShortlistContext.Provider value={{shortList, addProperty, removeProp}}>
//             {props.children}

//         </ShortlistContext.Provider>
//     )
// }
