import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./AuthonticationStyle/Authonitication.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {toast} from 'react-toastify';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const login = async (e) =>{
    e.preventDefault()
    try{
    const result =  await signInWithEmailAndPassword(auth, email, password)
      localStorage.setItem('currentUser',  JSON.stringify(result))
      toast.success('login successfull')
      window.location.href = '/'
    }catch (err){
       toast.warning('login failed',err);
    }
}
  return (
    <>
      <div className="login__page" >
          <div className="login__parent">
          <div className="ppt">
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_6wutsrox.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="login__div">
            <div className="login__form">
              <div className="login__heading">
                <h1 className="text-black-50">login here</h1>
              </div>
              <form onSubmit={login}>
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
                <button className="btn btn-outline-success login_btn">
                  log in
                </button>
              </form>
              <div className="login_btns">
              <NavLink to='/register' >click here to registration page</NavLink>
              </div>
            </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default Login;
