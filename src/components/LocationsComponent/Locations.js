
import "../../styles/Locations.css"
import Globe from 'react-globe.gl';
import { useEffect } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import locationData from "./LocationData";
import { SizeMe } from "react-sizeme";
const Locations = () => {
    const globeEl = useRef();

    useEffect(() => {
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.7;
    }, []);
   
   
    return (
        <div className="locationsComponent">
            <motion.div
                className="globeContainer"
                initial={{opacity:0, scale:0}}
                whileInView={{opacity:1, scale:1}}
                transition={{duration: 1.5}}
                
            >
                <div className="globeSize">

                    <Globe
                        
                        globeImageUrl="https://muralsyourway.vtexassets.com/arquivos/ids/242208/Black-And-White-World-Map-Wall-Mural.jpg?v=638164450682600000"
                        showAtmosphere={true}
                        atmosphereColor="rgb(35,35,35,1)"
                        pointColor="color"
                        ref={globeEl}
                        width={700}
                        height={700}
                        backgroundColor="rgba(35, 35, 35, 0)"
                        options={{
                            enableMarkerGlow: true,
                            markerRadiusScaleRange: [0.005, 0.02],
                            markerType: 'dot',
                          }}
                          onGlobeClick={e => {console.log(e)}}
                        pointsData={locationData}

                        
                        

                    />

                </div>
              

            </motion.div>


           <div className="mobileGlobe">
                <SizeMe>{({ size: { width } }) => (
                <Globe
                 width={width} height={width / (4/3)}
                 globeImageUrl="https://muralsyourway.vtexassets.com/arquivos/ids/242208/Black-And-White-World-Map-Wall-Mural.jpg?v=638164450682600000"
                 showAtmosphere={true}
                 atmosphereColor="rgb(35,35,35,1)"
                 pointColor="color"
                 ref={globeEl}
         
                 backgroundColor="rgba(35, 35, 35, 0)"
         
                 pointsData={locationData}

                  />
                )}</SizeMe>
           </div>

            <div className="locationsText">
                <motion.div
                    className="LocationsTitleSection"
                    initial={{y: "-100%", opacity:0}}
                    whileInView={{y: "0%",opacity:1}}
                    transition={{duration:1}}    
                >
                    <h2 className="locationsTitle">LOCATIONS</h2>
                    <h2 className="locationsSubTitle">WHERE TO FIND US</h2>


                </motion.div>

                <motion.div
                    className="locationStats"
                    initial={{opacity:0, y:"30%"}}
                    whileInView={{opacity:1, y:"0%"}}
                    transition={{duration:1}} 
                    >

                    <div className="locationNumbers">
                        <div className="individualLocationStat">
                            <p className="locationStatNumber">190+</p>
                            <h3 className="locationStatTitle">LOCATIONS</h3>
                            
                        </div>
                        <div className="individualLocationStat">
                            <p className="locationStatNumber">150+</p>
                            <h3 className="locationStatTitle">CITIES</h3>
                            
                        </div>
                        <div className="individualLocationStat">
                            <p className="locationStatNumber">90+</p>
                            <h3 className="locationStatTitle">YEARS</h3>
                            
                        </div>
                    </div>

                    <div className="locationStatsButtonContainer">
                        <a href="https://www.google.com/maps" target="blank" className="locationButton">Find Nearest Location</a>
                    </div>
                  
                    
                 
                   
                </motion.div>
            </div>
            
        </div>
    )
}

export default Locations;