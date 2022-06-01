import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

function Intro () {
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
        <section  className="intro">
            <div data-aos={"fade-left"} className="content">
                <h3>to create your brand</h3>
                <p>the batter brands, websites, mobile applications, and digital marketing solutions</p>
                <a href="contact" className="btn">contact us</a>
            </div>
            <div data-aos={"fade-right"} className="image"><img src="https://via.placeholder.com/500x250/a3a2a2" alt="" /></div>
        </section>
     );
}
 
export default Intro;