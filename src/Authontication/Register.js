import React,{useState} from "react";
import './AuthonticationStyle/Authonitication.css'
import { NavLink } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {toast} from 'react-toastify';


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = getAuth();

  const register = async (e) =>{
      e.preventDefault()
      try{
       await createUserWithEmailAndPassword(auth, email, password)
        toast.success('registeration successfull')
      }catch (err){
         toast.warning('registration failed',err);
      }
  }
  return (
    <>
      <div className="register__page">
        <div className="ppt">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_yr6zz3wv.json"
            background="transparent"
            speed="1"
            loop
            autoplay
            style={{width:'650px' }}
          ></lottie-player>
        </div>
        <div className="register__div">
          <div className="register__form">
            <div className="register__heading">
          <h1 className="text-black-50">
          register here
        </h1>
        </div>
            <form onSubmit={register}>
              <input
                type="text"
                name="email"
                placeholder="enter your email"
                value={email}
                autoComplete="off"
                className="input_form"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="text"
                name="password"
                placeholder="password"
                autoComplete="off"
                value={password}
                className="input_form"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                type="text"
                name="confirpassword"
                placeholder="confirm password"
                autoComplete="off"
                value={confirmPassword}
                className="input_form"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
              <button className="btn btn-outline-success register_btn" >register</button>
            </form>
            <div className="register_btns">
              <NavLink to='/login' >click here to login page</NavLink>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
