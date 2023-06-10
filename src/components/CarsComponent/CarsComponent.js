
import "../../styles/CarsComponent.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarData from "../CarsComponent/CarsData";

const CarsComponent = () => {

    const RecentWorks = [
        {
            test: 1,
            test2: 3
        },
        
    ]

    return(
        <div className="carComponentContainer">
          <div class="container-fluid overflow-hidden text-center">
        <div class="row gy-5">
        {CarData.map((value,key) => {
                return(
                    <div key={key} className={`column col`}>
                        <div className={"projectsPageProjectCard"}>
                            <div style={{backgroundImage:`url(${value.carImage})`}} className="carImageSection">
                              
                                
                            </div>
                            <div className="carPageInfo">
                                <p className="carPageInfoTitle">{value.modelName}</p>
                                <p className="carPageInfoDetails">TOP SPEED : {value.carTopSpeed}</p>
                                <p className="carPageInfoDetails">0-60 : {value.carAcceleration}</p>
                                <p className="carPageInfoDetails">HP : {value.carHorsepower}</p>
                                
                         

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