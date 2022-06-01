import img from '../images/logo.png';
const Header = () => {
    return ( 
        <header className="header">
            <a href="home" className="logo"><img src={img} alt="" /></a>
            <i id="menu-btn" className="fas fa-bars"></i>
            <nav className="navbar">
                <a href="home">home</a>
                <a href="about">about us</a>
                <a href="services">services</a>
                <a href="branding">branding</a>
                <a href="portfolio">portfolio</a>
                <a href="contact">contact us</a>
            </nav>
        </header>
     );
}



export default Header;