import React from "react";
import profile from "../abhishek_singh.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="h-screen flex flex-col items-center ">
      <div className=" flex flex-col items-center ml-10 mr-10">
        <div className="inline object-cover md:w-80 md:h-80 w-40 h-40 mr-2 rounded-full mt-3 mb-5 md:mb-10">
          <img
            className="inline object-cover md:w-80 md:h-80 w-40 h-40 rounded-full"
            src={profile}
            alt="profile"
          />
        </div>
        <div className=" ">
          <p className="text-2xl  mb-5">
            Hello 👋, my name is{" "}
            <span className="text-orange-600">Abhishek Singh</span> and I am a
            <span className="text-orange-600"> Frontend Developer</span>,
            passionate about building digital products that improve everyday
            experience for people.
          </p>
          <p className="text-2xl leading-tight">
            I love to work on exciting projects that test what I've learnt,
            whilst being exposed to the power and potential of the ever-evolving
            technologies around us. I'm always looking for better, and more
            importantly, ethical and accessible ways to solve the common
            problems we are faced with day-to-day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
