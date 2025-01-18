import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-full w-full bg-[#030014]">
        <div className="flex flex-col h-full w-screen">
          {/* <Navbar /> */}
          <StarsCanvas />
          <Hero />
          <Experience />
        </div>
        {/* 
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
      </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
