import "../../styles/About.css"
import { AiOutlinePlayCircle } from "react-icons/ai";
import {MdCloseFullscreen } from "react-icons/md";
import { motion } from "framer-motion";
//import videoFile from "../../images/aboutVideo2.mp4"
import { useState } from "react";
const About = () => {

    const toggleVideo = () => {
        videoClicked ? setVideoClicked(false) : setVideoClicked(true)
    }

    const [videoClicked, setVideoClicked] = useState(false);
    return (
        <div className="aboutSection">
           <div className="aboutTextSection">
                <motion.h2
                
                className="aboutTitle"
                initial={{x : -200, opacity:0}}
                whileInView={{x:0, opacity:1}}
                transition={{duration:1}}
                >WE ARE THE LEADERS IN THE AUTOMOTIVE INDUSTRY</motion.h2>
                <h2 className="aboutText">industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </h2>
           </div>

           <div className="aboutImageSection">
            <div className="videoPreview">
              
                <div className="viewVideoButton">

                    <AiOutlinePlayCircle onClick={() => {toggleVideo()}} className="playButton"/>
                

                </div>
               
            </div>

           </div>

           <div  className={ videoClicked ?  "videoContainer" : "videoContainerClosed"}>
            
              
                <MdCloseFullscreen className={ !videoClicked ?  "closevideoButtonHide" : "closeVideoButton"} onClick={() => {toggleVideo()}}/>
                {<video  className="aboutVideo" src={"https://media.porsche.com/mediakit/911-gt3/02-videos/02-02-footage/RCMF_992GT3_GOP_Fahrfootage_MASTER_210203_1080p25_16-9_H264.mp4"} controls="controls" />}
                
                
           </div>
        </div>
    )
}

export default About;