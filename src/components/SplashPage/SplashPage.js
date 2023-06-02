import SplashData from "../SplashPage/SplashPageData"

import "../../styles/SplashPage.css"
import { RiGasStationLine } from "react-icons/ri";
import { BsSpeedometer2 } from "react-icons/bs";
import { TbEngine} from "react-icons/tb";
import { motion } from "framer-motion"
import { useState } from "react";
const SplashPage = () => {
 
    const [selectedCar, setSelectedCar] = useState(0)
    return (
        <div className="splashComponentContainer">
            {SplashData.slice(selectedCar, selectedCar+1).map((value, key) => {
                return (
                    <div className="splashContainer">
                        
                        <div className="backgroundStrip">
                            <div className="stripImage" src=""></div>
                        </div>
                        <div className="carData">
                            <motion.div
                             className="carSpecs"
                             initial={{ opacity: .5,  x:"-50%" }}
                             whileInView={{ opacity: 1,  x: "0%" }}
                             transition={{ duration: 1 }}
                            >
                               <div className="individualSpec">
                                    <RiGasStationLine className="specIcon"/>
                                    <h3 className="specTitle">Power</h3>
                                    <p className="specdata">{value.carHorsepower}</p>
                               </div>
                               <div className="individualSpec">
                                   <BsSpeedometer2 className="specIcon"/>
                                   <h3 className="specTitle">0-60</h3>
                                    <p className="specdata">{value.carAcceleration}</p>
                               </div>
                               <div className="individualSpec">
                                    <TbEngine className="specIcon"/>
                                    <h3 className="specTitle">Top Speed</h3>
                                    <p className="specdata">{value.carTopSpeed}</p>
                               </div>
                            </motion.div>
                            <div className="carInformation">
                                <motion.h2
                                    className="carName"
                                    initial={{ opacity: .5,  y:"-100%" }}
                                    whileInView={{ opacity: 1,  y: "0%" }}
                                    transition={{ duration: 1.4 }}
                                >{value.modelName}
                                </motion.h2>
                                <motion.div
                                    className="carImg"
                                    initial={{   y:"40%" }}
                                    whileInView={{ y: "0%" }}
                                    transition={{ duration: 1 }}
                                    style={{backgroundImage: `url(${value.carImage})`}}
                                    
                                 ></motion.div>
                            </div>
                        </div>

                        <motion.div 
                            className="subData"
                            initial={{   y:"100%" }}
                            whileInView={{ y: "0%" }}
                            transition={{ duration: 1 }}
                        >
                            <div className="fullName">
                                <p className="fullNameTitle">PORSCHE</p>
                                <p className="fullNameSubtext">{value.modelName}</p>
                            </div>

                            <div className="carSelection">
                                <div className="chooseCarSection">

                               
                                {SplashData.map((value,key) => {
                                    return(
                                        <div onClick={() => {setSelectedCar(key)}} className="chooseCarButton" style={{backgroundImage:`url(${value.carImage})`}}>
                                           
                                           
                                        </div>
                                    )
                                })}
                                 </div>
                    
                            </div>

                            <div className="numberSection">
                                <p className="carProgress">0{selectedCar + 1}</p>
                                <p className="carProgressFull">03</p>
                               
                            </div>
                        </motion.div>
                    </div>
                )
            })}
        </div>
    )
}

export default SplashPage;