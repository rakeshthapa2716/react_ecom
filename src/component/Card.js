import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItems , delItems} from '../Redux/action';
import {NavLink} from 'react-router-dom'
import Layout from '../Layout/Layout';

const Card = () => {
const state = useSelector((state)=> state.cardHandle)
const dispatch = useDispatch();
const handleAdd = (item) =>{
  dispatch(addItems(item))
}
const handleDel = (item) =>{
   dispatch(delItems(item))
}
const emptyCard = ()=>{
 return(
   <Layout >
    <div className='rounded-3 py-5 empty_card'>
    <div className="container">
      <div className="row">
        <h3>Your Card is Empty</h3>
      </div>
    </div>
  </div>
  </Layout >
 )
}
const cartItems = (product) =>{
 return(
    <Layout>
  <div className='px-4 rounded-3 py-5 cardItems'>
    <div className='container py-4'>
      <div className="row justify-content-center">
        <div className='col-md-4 card_img'>
          <img src={product.image} alt={product.title} height="200px" width="200"/>
        </div>
        <div className="col-md-5 card_content">
          <h3>{product.title}</h3>
          <p className='lead fw-bold'>{product.qty} X {product.price} = ${product.qty * product.price}</p>
          <button className='btn btn-outline-dark me-4'onClick={()=>handleDel(product)}><i className='fa fa-minus'/></button>
          <button className='btn btn-outline-dark me-4'onClick={()=>handleAdd(product)}><i className='fa fa-plus'/></button>
        </div>
      </div>
    </div>
  </div>
  </Layout>
 )
}
const buttons = () =>{
  return(
    <>
    <div className="container mt-5 card_checkout">
      <div className="row">
         <NavLink to ='/proceed' className='btn btn-outline-dark mb-5 w-25 mx-auto'>
         Prodceed to Checkout
         </NavLink>
      </div>
    </div>
    </>
  )
}
  return(
    <>
         {state.length === 0 && emptyCard()}
         {state.length !== 0 && state.map(cartItems)}
         {state.length !== 0 && buttons()}
    </>
  )
}

export default Card;
