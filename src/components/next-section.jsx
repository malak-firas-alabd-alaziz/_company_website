import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";


const NextSection = () => {
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
        <section className="next" data-aos={"fade"}>
            <img src='https://via.placeholder.com/1400x600/000' alt="" />
            <div className="content">
                <p>with a variety of accountants available at our company, you can always choose one that fits your corporate requirements.</p>
                <a href="hhh" className="btn">free consultation</a>
            </div>
        </section>
     );
}
 
export default NextSection;