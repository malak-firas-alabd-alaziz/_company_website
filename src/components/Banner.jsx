import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

import image1 from './images/image2.png';
import image2 from './images/image3.png';
import image3 from './images/image4.png';
import image4 from './images/image4.jpg';



const Banner = () => {
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
        <div className="banner" data-aos={"fade"}>
            <img src="https://via.placeholder.com/1400x200/gray" alt="" />
            <div className="container">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
        </div> 
    );
}
 
export default Banner;