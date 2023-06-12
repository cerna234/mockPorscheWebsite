
import "../../styles/Footer.css"
import { Link } from "react-router-dom";
const Footer = () => {
    return(
        <div className="footerContainer">
            <div className="footerTopSection">
                <div className="footerLogoSection">

                <div className="footerLogo">

                </div>
                </div>

                <div className="footerLinksSection">
                <div className="footerLinksConatiner">

                    <Link className="footerLink" to="/">Home</Link>
                    <Link className="footerLink" to="/cars">Cars</Link>
                 
                
                </div>

                </div>

            </div>
           
            <div className="footerBottomSection">since 1931</div>
            <h2 className="footerOverlay">31'</h2>
        </div>
    )
}


export default Footer;