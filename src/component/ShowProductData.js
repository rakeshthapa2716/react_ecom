import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ShowProductData = ({productData}) => {
  const [filterData, setFilterData] = useState(productData)
     
  // console.log(adddataItems(product));
  
  const productFilter = (filterOut) => {
    const updated = productData.filter((fill)=>fill.category === filterOut)
    setFilterData(updated)
  }
  return (
    <>
    <div className="container">
    <div className="row">
      <div className="buttons d-flex direction-column justify-content-center pb-4 col-10 m-auto filterbtn">
        <button className="btn btn-outline-dark me-2 text-justify" onClick={()=>
          setFilterData(productData)
            }>all</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>{
          productFilter("men's clothing")
        }}>men's_cloths</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>{
           productFilter("women's clothing")
        }}>
          women's_cloths
        </button>
        <button className="btn btn-outline-dark me-2" onClick={()=>{
           productFilter( "electronics")
        }}>electronics</button>
        <button className="btn btn-outline-dark me-2" onClick={()=>{
           productFilter("jewelery")
        }}>jewelery</button>
      </div>
      </div>
      </div>
      {filterData.map((productData) =>  {
        const {id,image,title,price} = productData;
        return (
          <div className=" col-10 col-sm-10 col-md-6 col-lg-4 col-xl-3 m-auto" key={id}>
            <div className ="card text-center card__content mb-4 ">
              <img src={image} className="card-img-top p-4" alt={title} /> 
              <hr />
              <div className="card-body p-0">
                <h5 className="card-title mb-0">{title.substring(0,20)}...</h5>
                <p className="card-text mb-3">
                  <span style={{color:"red"}}>$</span> {price}
                </p>
              </div>
              <div className="card__overlay">
              <NavLink to={`/products/${id}`} className="btn btn-outline-light  me-2">buy now</NavLink>
              </div>
            </div>
            </div>
        )
      })}
    </>
  );
};

export default ShowProductData;
