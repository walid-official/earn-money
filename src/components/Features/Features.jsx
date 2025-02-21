import featureImg from "../../assets/card2.png";
import { IoStar } from "react-icons/io5";
import TestSlider from "../TestSlider/TestSlider";
// import "./Feature.css"
const Features = () => {
  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="pb-20">
        <h2 className="md:text-4xl text-3xl  font-bold text-center">
          Skill-Based Job Matching
        </h2>
        <p className="text-center  md:w-[50%] mx-auto py-3">
          Connect with job opportunities that perfectly match your skills and
          experience, maximizing your earning potential
        </p>
      </div>
      <div className="lg:flex  justify-between">
        <div className="lg:w-[50%] lg:py-0 py-7 flex lg:justify-start justify-center items-center">
          <img className="w-[80%]" src="https://iko-nuxt.netlify.app/assets/img/update/normal/faq_1-1.png" alt="" />
        </div>
        <div className="lg:w-[50%]">
          <TestSlider></TestSlider>
        </div>
      </div>
    </div>
  );
};

export default Features;
