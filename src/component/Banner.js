import React from "react";
import Layout from "../Layout/Layout";
import ProductCard from "./ProductCard";

const Banner = () => {
  return (
    <Layout>
      <div className="card text-dark">
        <img src="banner.jpg" className="card-img" alt="banner_img" height='50%' />
        <div className="card-img-overlay">
          <div className="container banner__content">
          <h1 className="card-title">new season arrivals</h1>
          <p className="card-text">
            check out all the trends
          </p> 
          </div>
        </div>
      </div>
      <ProductCard />
    </Layout>
  );

};

export default Banner;
