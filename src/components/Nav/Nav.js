import { useState } from "react";
import "../../styles/Nav.css"
import { GiHamburgerMenu} from "react-icons/gi";
import { motion } from "framer-motion";
import { SiPorsche } from "react-icons/si";
import { Link } from "react-router-dom";

const Nav = () => {

    const [navIsOpen, setNavIsOpen] = useState(false);
    
    const NavToggle = () => {
        !navIsOpen ? setNavIsOpen(true) : setNavIsOpen(false)
    }

    return (
        <nav className="navContainer">
            <div className="logoSection">
               <div className="logoContainer">
                 
                    <div className="logo">

                    </div>
               </div>
            </div>

            <div className="linkSection">
                    <GiHamburgerMenu className="HamburgerIcon" onClick={() => {NavToggle()}}/>
            </div>

            <div className={ navIsOpen ? "openedNav" : "closedNav"}>
                <div className="innerClosedNav">
                    <div className="closeSection">
                        <p className={ navIsOpen ? "showClose" : "hideClose"} onClick={() => {NavToggle()}}>CLOSE</p>
                    </div>

                    <div className="backgroundImageOverlay">

                    </div>
                    <div className="navLinks" >
                
                     

                        <Link
                            to="/"
                            onClick={() => {NavToggle()}}
                            className="carLinkContainer"
                        >
                            <motion.p
                            className="navLink"
                            initial={{ opacity: 0,  y:"100%" }}
                            whileInView={{ opacity: 1,  y: "0%" }}
                            transition={{ duration: 1, delay: .4 }}
                            >Home
                            </motion.p>
                        </Link>
                        <Link
                            to="/cars"
                            onClick={() => {NavToggle()}}
                            className="carLinkContainer"
                        >
                            <motion.p
                            className="navLink"
                            initial={{ opacity: 0,  y:"100%" }}
                            whileInView={{ opacity: 1,  y: "0%" }}
                            transition={{ duration: 1, delay: .4 }}
                            >CARS
                            </motion.p>
                        </Link>
                      
                       
                        
                      

                        <SiPorsche className="logoOverlay"/>
                        <div className="companyInfo">
                            <h2 className="companyInfoTitle">Headquarters</h2>
                            <p className="companyInfoValue">Stuttgart, Germany</p>

                            <h2 className="companyInfoTitle">Contact</h2>
                            <p className="companyInfoValue">1 (800) 767-7243</p>
                        </div>

                       
                      
                    </div>
                </div>
               
                
            </div>
        </nav>
    )
}


export default Nav;