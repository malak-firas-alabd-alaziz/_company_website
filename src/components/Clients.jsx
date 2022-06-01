import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

import pic1 from './images/pic1.jpg';
import pic2 from './images/pic2.jpg';
import pic3 from './images/pic3.jpg';

const Clients = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 700,
            easing: 'linear',
            delay: 200,
          });
        AOS.refresh();
      }, []);
    return ( 
        <section className="clients" data-aos={"zoom-out-up"}>
            <h1 className="head">our client's</h1>
            <div className="line"></div>
            <div className="box-container">
                <div className="box">
                    <div className="info">
                        <img src={pic1} alt="" />
                        <h4>john soe</h4>
                    </div>
                    <div className="comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id aliquam totam tenetur obcaecati maiores odio sequi possimus dolores deleniti.</p>
                        <i className="fa-solid fa-quote-right"></i>
                    </div>
                </div>
                <div className="box">
                    <div className="info">
                        <img src={pic2} alt="" />
                        <h4>john soe</h4>
                    </div>
                    <div className="comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id aliquam totam tenetur obcaecati maiores odio sequi possimus dolores deleniti.</p>
                        <i className="fa-solid fa-quote-right"></i>
                    </div>
                </div>
                <div className="box">
                    <div className="info">
                        <img src={pic3} alt="" />
                        <h4>john soe</h4>
                    </div>
                    <div className="comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id aliquam totam tenetur obcaecati maiores odio sequi possimus dolores deleniti.</p>
                        <i className="fa-solid fa-quote-right"></i>
                    </div>
                </div>
            </div>
        </section> 
    );
}
 
export default Clients;