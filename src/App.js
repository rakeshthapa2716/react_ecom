import React from 'react'
import Home from './component/Banner';
import {Routes,Route,Navigate} from 'react-router-dom';
import ProductCard from './component/ProductCard';
import Product from './component/Product';
import Register from './Authontication/Register'; 
import Login from './Authontication/Login';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './component/Card';
import About from './component/About';
import Contact from './component/Contact';
import Proceed from './component/Proceed';
const App = () => {
  return (
    <>
     <ToastContainer />
    <Routes >
      <Route exact path="/" element={<ProductedRoutes><Home /></ProductedRoutes>}/>
      <Route path="/products" exact element={<ProductedRoutes><ProductCard /></ProductedRoutes>}/>
      <Route path = "/products/:id" exact element={<ProductedRoutes><Product /></ProductedRoutes>} /> 
      <Route path = "/card" exact element={<ProductedRoutes><Card/></ProductedRoutes>} /> 
      <Route path = "/about" exact element={<ProductedRoutes><About/></ProductedRoutes>} /> 
      <Route path = "/contact" exact element={<ProductedRoutes><Contact/></ProductedRoutes>} /> 
      <Route path = "/proceed" exact element={<ProductedRoutes><Proceed/></ProductedRoutes>} /> 
      <Route path = "/register" exact element={<Register />} /> 
      <Route path = "/login" exact element={<Login />} /> 
    </Routes>
    </>
  )
}

export default App;

export const ProductedRoutes = ({children}) =>{
  if(localStorage.getItem('currentUser')){
    return children
  }else{
   return  <Navigate to = "/login"/>
  }
}

