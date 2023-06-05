import SplashPage from "../components/SplashPage/SplashPage";
import About from "../components/AboutSection/About";
import Locations from "../components/LocationsComponent/Locations";
import CompareCallToAction from "../components/Compare/CompareCallToAction";
import "../styles/home.css"
const Home = () => {
    return (
        <div className="home">
           <SplashPage/>
           <About/>
           <Locations/>
           <CompareCallToAction/>
        </div>
    )
}

export default Home;