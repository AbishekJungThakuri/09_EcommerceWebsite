
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import{ BrowserRouter, Route, Routes } from 'react-router-dom'
import { Shop } from './Pages/Shop'
import { ShopCategogry } from './Pages/ShopCategogry'
import { Product } from './Pages/Product'
import { LoginSignup } from './Pages/LoginSignup'
import { Cart } from './Pages/Cart'
import { Footer } from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {

  return (
    <>
    <BrowserRouter>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/mens' element={<ShopCategogry banner={men_banner} category="men" />}  />
      <Route path='/womens' element={<ShopCategogry banner={women_banner} category="women" />} />
      <Route path='/kids' element={<ShopCategogry banner={kid_banner} category="kid" />} />
      <Route path='/product/:productId' element={<Product/>} />
      <Route path='/login' element={<LoginSignup/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
     
    </>
  )
}

export default App
