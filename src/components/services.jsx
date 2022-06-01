import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

import sImg1 from './images/social-marketing.png';
import sImg2 from './images/developer.png';
import sImg3 from './images/swatches.png';
import sImg4 from './images/analysis.png';
import sImg5 from './images/domain.png';
import sImg6 from './images/devices.png';



const Services = () => {
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
        <section className="services">
            <div className="box-container">
                <div className="box" data-aos={"flip-left"}>
                    <img src={sImg1} alt="" />
                    <h2>digital marketing</h2>
                    <p>we will pair your business with influencers that speak to yur audience influencers marketing is audience influencers marketing is</p>
                    <a href="any think" className="btn-2">see more</a>
                </div>
                <div className="box" data-aos={"flip-left"}>
                    <img src={sImg2} alt="" />
                    <h2>development</h2>
                    <p>we will pair your business with influencers that speak to yur audience influencers marketing is audience influencers marketing is</p>
                    <a href="any think" className="btn-2">see more</a>
                </div>
                <div className="box" data-aos={"flip-left"}>
                    <img src={sImg3} alt="" />
                    <h2>graphic design</h2>
                    <p>we will pair your business with influencers that speak to yur audience influencers marketing is audience influencers marketing is</p>
                    <a href="any think" className="btn-2">see more</a>
                </div>
                <div className="box" data-aos={"flip-left"}>
                    <img src={sImg4} alt="" />
                    <h2>web analiytics</h2>
                    <p>we will pair your business with influencers that speak to yur audience influencers marketing is audience influencers marketing is</p>
                    <a href="any think" className="btn-2">see more</a>
                </div>
                <div className="box" data-aos={"flip-left"}>
                    <img src={sImg5} alt="" />
                    <h2>domain and hosting</h2>
                    <p>we will pair your business with influencers that speak to yur audience influencers marketing is audience influencers marketing is</p>
                    <a href="any think" className="btn-2">see more</a>
                </div>
                <div className="box" data-aos={"flip-left"}>
                    <img src={sImg6} alt="" />
                    <h2>ui/ux design</h2>
                    <p>we will pair your business with influencers that speak to yur audience influencers marketing is audience influencers marketing is</p>
                    <a href="any think" className="btn-2">see more</a>
                </div>
            </div>
            <h1 data-aos={"zoom-out"}>we are providing</h1>
            <p data-aos={"zoom-out"}>we provide expert tax and advisory services to individulas and small businesses</p>
        </section>
     );
}
 
export default Services;