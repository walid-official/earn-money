import featureImg from "../../assets/card2.png";
import { IoStar } from "react-icons/io5";
import TestSlider from "../TestSlider/TestSlider";
// import "./Feature.css"
const Features = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="">
        <h2>Skill-Based Job Matching</h2>
        <p>.</p>
      </div>
      <div className="pb-20">
        <h2 className="text-4xl text-white font-bold text-center">
        Skill-Based Job Matching
        </h2>
        <p className="text-center text-white md:w-[60%] mx-auto py-3">
        Connect with job opportunities that perfectly match your skills and experience, maximizing your earning potential
        </p>
      </div>
      <div className="flex justify-between">
        <div className="w-[50%]">
          <img src={featureImg} alt="" />
        </div>
        <div className="w-[50%]">
         <TestSlider></TestSlider>
        </div>
      </div>
    </div>
  );
};

export default Features;
