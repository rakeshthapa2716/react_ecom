import React from 'react';
import Layout from '../Layout/Layout';
import {NavLink} from 'react-router-dom';

const About = () => {
  return(
      <Layout>
         <div className="container">
             <div className="row">
                 <div className="about__page ">
                     <div className="card__contant">
                     <h1>about us</h1>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi rerum quas perferendis illum voluptate reprehenderit corporis neque dolores amet inventore, expedita dicta nihil sunt aperiam error obcaecati tenetur dolorum, non a eum. Tempore nulla neque, repellat hic officia ipsum necessitatibus culpa eveniet amet debitis autem unde fuga, est illum magni nisi aperiam delectus vero fugiat vitae saepe quasi quisquam! Incidunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium neque veritatis fugiat commodi molestias nemo quo, aliquid dicta quas numquam perferendis optio nobis provident dolorum quaerat fuga, quia laboriosam voluptas eius voluptate recusandae. Tempore, quidem! </p>
                     <NavLink to='/contact' className='btn btn-outline-dark mt-3'>contact us</NavLink>
                 </div>
                 <div className="about__img">
                 <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_9wjm14ni.json"  background="transparent"  speed="1"  style={{width: '100%' ,height: '100%'}}  loop autoplay/>
                 </div>
                 </div>
             </div>
         </div>
      </Layout>
  )
};

export default About;
