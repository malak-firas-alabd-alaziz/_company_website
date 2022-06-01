import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";

const Provide = () => {
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
        <section className="provide">
            <div className="box-container" data-aos={"zoom-out"}>
                <div className="box">
                    <img src="https://via.placeholder.com/70x70/ccc" alt="" />
                    <h4>office365</h4>
                    <div className="line"></div>
                    <p>we are here to grow your business with our services</p>
                </div>
                <div className="box">
                    <img src="https://via.placeholder.com/70x70/ccc" alt="" />
                    <h4>it services sequrity</h4>
                    <div className="line"></div>
                    <p>we are here to grow your business with our services</p>
                </div>
                <div className="box">
                    <img src="https://via.placeholder.com/70x70/ccc" alt="" />
                    <h4>data entry</h4>
                    <div className="line"></div>
                    <p>we are here to grow your business with our services</p>
                </div>
                <div className="box">
                    <img src="https://via.placeholder.com/70x70/ccc" alt="" />
                    <h4>other services</h4>
                    <div className="line"></div>
                    <p>we are here to grow your business with our services</p>
                </div>
            </div>
        </section>
     );
}
 
export default Provide;