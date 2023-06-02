import SplashPage from "../components/SplashPage/SplashPage";
import About from "../components/AboutSection/About";
import Locations from "../components/LocationsComponent/Locations";
import "../styles/home.css"
const Home = () => {
    return (
        <div className="home">
           <SplashPage/>
           <About/>
           <Locations/>
        </div>
    )
}

export default Home;