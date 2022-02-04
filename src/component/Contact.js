import React from "react";
import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row contact__header">
          <div className="contact ">
          <h1>have some questions?</h1>
          <div className="contact__wrapper">
            <div className="contact__img">
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_u25cckyh.json"
                background="transparent"
                speed="1"
                loop
                style={{width:'400px' , height:'400px'}}
                autoplay
              />
            </div>
            <div className="contact__form">
              <form>
                <div className="form-group">
                  {/* <label>Full Name</label> */}
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form-group">
                  {/* <label>Password</label> */}
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="form-group">
                <textarea className="form-control" placeholder="Massage" id="exampleFormControlTextarea1" rows="6"/>
                </div>
                <button type="submit" className="btn btn-outline-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
