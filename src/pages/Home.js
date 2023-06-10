import SplashPage from "../components/SplashPage/SplashPage";
import About from "../components/AboutSection/About";
import Locations from "../components/LocationsComponent/Locations";
import CompareCallToAction from "../components/Compare/CompareCallToAction";
import Contact from "../components/Contact/Contact";
import "../styles/home.css"
const Home = () => {
    return (
        <div className="home">
           <SplashPage/>
           <About/>
           <Locations/>
           <Contact/>
        </div>
    )
}

export default Home;