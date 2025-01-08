import { Canvas } from "@react-three/fiber";
import "./App.scss";
import Nav from "./Section/Nav";
import Drinks from "./Section/Drinks";
import "./Styles/Downloadcv.scss";
import CV from "../public/assets/FidelBrianDava_CV.pdf";


const App = () => {
  return (
    <div className="container">
      <Nav />
      <div className="text">
        <h1><span>Hi</span><span>, </span><span> it's</span><span> me</span><span> Fidel</span></h1>
        <h3>Always your number one, till infinity and beyond . . .</h3>
      </div>
      <div className="button">
        <a href={CV} download="FidelBrianDava_CV.pdf">
        <button className="btn">
          <strong className="strong"><a href={CV} download="FidelBrianDava_CV.pdf">Download CV</a></strong>
          <div className="containerstars">
            <div className="stars"></div>
          </div>
          <div className="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
        </a>
      </div>
      <Drinks className='drinks'/>
    </div>
  );
};

export default App;
