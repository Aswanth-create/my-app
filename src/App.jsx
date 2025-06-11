import { useState } from 'react'
import reactLogo from './assets/react.svg'      
import viteLogo from '/vite.svg'
import './App.css'

import User from './components/User'
import Login from './components/Login'
import Product from './components/product'
import Name from './components/Name'
import { AppBar } from '@mui/material'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import Signup from './components/signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>welcome to react</h1>
      <Navbar/>
   <Routes>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
     <Route path='/Name' element={<Name/>}/>
     <Route path='/counter' element={<Counter/>}/>
      <Route path='/User' element={<User/>}/>
       <Route path='/product' element={<Product/>}/>


     

   </Routes>
      


    </>
  )
}

export default App
