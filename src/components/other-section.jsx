import React, { useEffect } from "react";
import AOS from 'aos';
import "aos/dist/aos.css";


const OtherSection = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 500,
            easing: 'linear',
            delay: 200,
          });
        AOS.refresh();
      }, []);

    return ( 
        <section className="other">
            <div data-aos={"fade-top"} className="content">
                <h4>lorem media is a full-service social media agency. we offer businesses innoative solutions that deliver the right type of</h4>
                <p>lorem media is a full-service social media agency. we offer businesses innoative solutions that deliver the right type ofaudience to you in the most effective strategies possible we strive to develop a community around your business, polishing your branding , and</p>
            </div>
            <div data-aos={"fade-bottom"} className="image"><img src="https://via.placeholder.com/650x300/aaa" alt="" /></div>
        </section>
     );
}
 
export default OtherSection;