
import "../../styles/CarsComponent.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarData from "../CarsComponent/CarsData";
import { BsFillPersonFill } from "react-icons/bs";
import { GiCarDoor,GiSuitcase } from "react-icons/gi";

const CarsComponent = () => {

   

    return(
        <div className="carComponentContainer">
            <div className="carsTitleSetion">
                <h3 className="carsTitle">CARS AND MODELS</h3>

            </div>
          <div class="container-fluid overflow-hidden text-center">
        <div class="row gy-5">
        {CarData.map((value,key) => {
                return(
                    <div key={key} className={`column col`}>
                        <div style={{backgroundImage:`url(${value.carImage})`}} className={"projectsPageProjectCard"}>
                            
                            <div className="carPageInfo">
                                <p className="carpPageInfoNumber">{key + 1 < 10 ? 0 : ""} {key + 1}</p>
                                <p className="carPageInfoTitle">{value.modelName}</p>
                                <p className="carPageInfoDetails">TOP SPEED : {value.carTopSpeed}</p>
                                <p className="carPageInfoDetails">0 - 60 :  {value.carAcceleration}</p>
                                <p className="carPageInfoDetails">HP : {value.carHorsepower}</p>

                                <div className="carDetails">
                                    <div className="carDetailsInfo">
                                        <p><BsFillPersonFill/></p>
                                        <p>4</p>
                                    </div>
                                    <div className="carDetailsInfo">
                                        <p><GiCarDoor/></p>
                                        <p>4</p>
                                    </div>
                                    <div className="carDetailsInfo">
                                        <p><GiSuitcase/></p>
                                        <p>4</p>
                                    </div>
                                   
                                   
                                </div>
                                
                         

                            </div>

                        </div>
                    </div>
                )
            })}
        </div>
    </div>
        </div>
    )
}

export default CarsComponent;