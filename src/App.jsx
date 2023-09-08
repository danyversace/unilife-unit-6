import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import Footer from './components/Footer/Footer'
import SeeAllCitiesPage from './pages/SeeAllCitiesPage/SeeAllCitiesPage'
import CityDetailsPage from './pages/CityDetailsPage/CityDetailsPage'
import HomeDetailsPage from './pages/HomeDetailsPage/HomeDetailsPage'
import Favorites from './pages/Favorites/Favorites'
import FavoritesContextProvider from './contexts/FavoritesContext'


function App() {

  return (
    <div>
    <BrowserRouter>
     <FavoritesContextProvider>
          <Header />
            <Routes>
              <Route path='/' element={<Homepage />}/>
              <Route path='/cities' element={<SeeAllCitiesPage />}/>
              <Route path='/favorites' element={<Favorites />}/>  
              <Route path='/citydetails/:cityId' element={<CityDetailsPage />}/>
              <Route path='/homedetails/:homeId' element={<HomeDetailsPage />}/>
            </Routes>
            <Footer />
       </FavoritesContextProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
