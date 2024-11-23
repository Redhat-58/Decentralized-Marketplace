import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import List_Products from './components/List_Products'
import Navbar from './components/Navbar'
import TransactionHistory from './components/TransactionHistory'
import AddProducts from './components/AddProducts'

const App = () => {
  return (
    <div>

      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>}/> 
        <Route path="/list-products"  element={<List_Products/>}/> 
        <Route path="/add-products"  element={<AddProducts/>}/> 
        <Route path="/transaction"  element={<TransactionHistory/>}/> 
      </Routes>
    </div>
  )
}

export default App