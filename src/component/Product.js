import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { useDispatch } from "react-redux";
import { addItems } from "../Redux/action";
import { NavLink } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addData = (product) => {
    dispatch(addItems(product));
  };
  useEffect(() => {
    const getProductData = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setproduct(await res.json());
      setLoading(false);
    };
    getProductData();
  }, []);
  const Loading = () => {
    return (
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
    );
  };

  const ShowProduct = () => {
    return (
      <Layout>
        <div className="row show__product">
          <div className="image__div">
            <img
              src={product.image}
              alt={product.title}
              height={"500px"}
              width={"500px"}
            />
          </div>
          <div className="card__items_content">
            <h3 className="text-uppercase text-black-50">{product.category}</h3>
            <h1 className="display-5">{product.title}</h1>
            <p className="text-capitalize">
       
              rating {product.rating && product.rating.rate}
              <i className="fa fa-star" />
            </p>
            <h2 className="fw-bold ">$ {product.price}</h2>
            <p className="para mt-3"> {product.description}</p>
            <button
              className="btn btn-outline-dark me-3 card_btns"
              onClick={() => addData(product)}
            >
              add to card
            </button>
            <NavLink to="/card" className="btn btn-outline-dark me-3 card_btns">
              go to card
            </NavLink>
          </div>
        </div>
      </Layout>
    );
  };
  return (
    <div>
      <div className="container">
        <div className="paading">
          <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
