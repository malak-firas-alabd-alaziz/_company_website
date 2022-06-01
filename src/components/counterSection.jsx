import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";
const CounterSection = () => {
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
        <section className="next" data-aos={"zoom-in-down"}>
            <img src='https://via.placeholder.com/1400x800/000' alt="" />
            <div className="content">
                <h1>we'r always ahead. professional solutions for your business</h1>
                <div className="box-container">
                    <div className="box">
                        <h1>150+</h1>
                        <p>active clients</p>
                    </div>
                    <div className="box">
                        <h1>96%</h1>
                        <p>success rate</p>
                    </div>
                    <div className="box">
                        <h1>100+</h1>
                        <p>projects done</p>
                    </div>
                    <div className="box">
                        <h1>9+</h1>
                        <p>experience</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default CounterSection;