
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiGitCompare } from "react-icons/bi";
import { motion } from "framer-motion";
import "../../styles/CompareCallToAction.css"
const CompareCallToAction = () => {
    return (
        <div className="CompareCallToActionContainer">
            <motion.div 
                className="compareTitleSection"
                initial={{opacity:0, y:"-100%"}}
                whileInView={{opacity:1, y:"0%"}}
                transition={{duration:1}}
               
            >
               <h2 className="compareTitle">CAR COMPARISON</h2>
               <p className="compareSubtitle">dndnk kdndmnd </p>
            </motion.div>

            <div className="compareCarSection">
                <div className="carSection">
                    <div className="carCompareImageSection">
                        <motion.div 
                            className="carCompareImage"
                            initial={{opacity:0, x:"-100%"}}
                            whileInView={{opacity:1, x:"0%"}}
                            transition={{duration:1}}
                        ></motion.div>
                    </div>
                    <div className="carSectiontext">

                    </div>
                </div>
                <div className="carSection">
                    <div className="carCompareImageSection">
                    <motion.div 
                            className="carCompareImage2"
                            initial={{opacity:0, x:"100%"}}
                            whileInView={{opacity:1, x:"0%"}}
                            transition={{duration:1}}
                        ></motion.div>
                    </div>
                    <div className="carSectiontext">

                    </div>
                </div>

                <p className="vs">vs</p>
                <BiGitCompare className="overlay"></BiGitCompare>
            </div>

            <div className="compareButtonSection">
                <div className="compareButton">
                    <div className="buttonTextSection">
                        <p>Compare</p>
                    </div>
                  

                    <div className="compareArrowSection">
                       
                        <MdKeyboardArrowRight className="CompareArrow" />
                        <MdKeyboardArrowRight className="CompareArrow1" />
                        <MdKeyboardArrowRight className="CompareArrow2" />
                   
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompareCallToAction;