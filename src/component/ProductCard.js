import React, { useEffect, useState } from "react";
import ShowProductData from "./ShowProductData";
import Layout from "../Layout/Layout";

const ProductCard = () => {
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState(product);
  const [loading, setLoading] = useState(false);

  let componentMount = true;
  const getData = async () => {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    if (componentMount) {
      setProduct(await res.clone().json());
      setFilter(await res.clone().json());
      setLoading(false);
    }
    return () => {
      componentMount = false;
    };
  };

  useEffect(() => {
    getData();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="loading_screem">
          <div className="spinner-grow text-primary me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary me-2" role="status">
            <span className="visually-hidden me-2">Loading...</span>
          </div>
          <div className="spinner-grow text-success me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-info me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-light me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-dark me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <Layout>
      <div className="Product">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>latest products</h1>
              <hr />
            </div>
          </div>
          <div className="row">
            {loading ? (
              <Loading />
            ) : (
              <ShowProductData CardData={filter} productData={product} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductCard;
