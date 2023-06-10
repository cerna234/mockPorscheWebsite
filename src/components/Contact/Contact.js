
import "../../styles/Contact.css"
import { AiOutlineMail,AiOutlinePhone,AiOutlineInstagram } from "react-icons/ai";
import { motion } from "framer-motion";
const Contact = () => {
    return (
        <div className="contactSection">
          
            <div className="contactSectionContainer">
                <div className="contactInfoContainer">
                    <motion.div
                        className="contactInfo"
                        initial={{x:"-40%", opacity:0}}
                        whileInView={{x:"0%", opacity:1}}
                        transition={{duration:1}}
                            >
                        <h2 className="contactTitle">CONTACT US</h2>


                        <div className="contactText">
                            <AiOutlineMail className="contactTextIcon"/>
                            <h3 className="contactTextInfo">privacy@porsche.us</h3>
                        </div>
                        <div className="contactText">
                            <AiOutlinePhone className="contactTextIcon" />
                            <h3 className="contactTextInfo">1-800-PORSCHE</h3>
                        </div>
                       
                        
                        
                    </motion.div>
                </div>
                <div className="contactImageSection">
                    <div className="contactImage"></div>
                </div>

            </div>
            
        </div>
    )
}

export default Contact;