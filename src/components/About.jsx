import Lottie from "lottie-web";
import React, { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const About = () => {
  const container = useRef();

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../work.json"),
    });
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col h-max bg-black lg:flex-row md:items-center w-screen  gap-3 text-white md:h-screen"
    >
      <div className="flex flex-col ml-10 mt-28 md:ml-20 gap-3 w-1/2 md:mb-36">
        <p className="text-3xl text-white w-screen">Hello, my name is</p>
        <p className="text-5xl w-max text-white">Abhishek Singh</p>
        <div className="text-4xl w-max text-orange-600">
          <Typewriter
            words={["Frontend Developer"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
        <a
          href="https://drive.google.com/file/d/1QNU-54g6TcD4tEOC_ZPQ8CZWyyFe8Bnv/view?usp=sharing"
          target="blank"
        >
          <button
            type="button"
            class="py-3 px-5 text-base font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-600 "
          >
            Resume
          </button>
        </a>
      </div>
      <div className="w-1/2 h-full ml-10 mr-20">
        <div className="h-full w-full" ref={container} />
      </div>
    </div>
  );
};

export default About;
