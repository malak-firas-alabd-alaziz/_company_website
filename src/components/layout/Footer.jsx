const Footer = () => {
    return ( 
        <footer>
            <div className="footer-container">
                <div className="section-1">
                    <div className="box-container">
                        <div className="box">
                            <h2>quick links</h2>
                            <a href="home">home</a>
                            <a href="about">about company</a>
                            <a href="services">services</a>
                            <a href="contact">contact us</a>
                        </div>
                        <div className="box">
                            <h2>support</h2>
                            <a href="get started">get started</a>
                            <a href="lorem">lorem</a>
                            <a href="ipsum">ipsum</a>
                            <a href="help">help</a>
                        </div>
                        <div className="box">
                            <h2>address/phone/email</h2>
                            <p>14. 1 qatar, dawha</p>
                            <p>+0987654321</p>
                            <p>+1234567890</p>
                            <p>livesletech@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="section-2">
                    <h4>subscribe to our website</h4>
                    <div className="input-box">
                        <input type="text" placeholder="your email" />
                        <i className="fas fa-search"></i>
                    </div>
                    <div className="follow">
                        <p>follow us on</p>
                        <a href="anyrhink" ><i className="fab fa-facebook"></i></a>
                        <a href="anyrhink" ><i className="fab fa-instagram"></i></a>
                        <a href="anyrhink" ><i className="fab fa-twitter"></i></a>
                        <a href="anyrhink" ><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;