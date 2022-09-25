import React from "react";
import Card from "./Card";
import myntraImage from "../myntra.png";
import dashboard from "../dashboard.png";
import weather from "../weather.png";
import css from "../logo/css2.png";
import html from "../logo/html.png";
import js from "../logo/js.png";
import react from "../logo/react.png";
import redux from "../logo/redux.png";
import tailwind from "../logo/tailwind.png";
import Marquee from "react-fast-marquee";

const Projects = () => {
  const data = [
    {
      name: "Myntra Clone",
      tec: ["REACT", "CSS"],
      link: "http://abhi-myntra.herokuapp.com/",
      img: myntraImage,
      git: "https://github.com/abhsin96/Myntra",
    },
    {
      name: "Admin DashBoard",
      tec: ["REACT", "Tailwind", "Syncfusion"],
      link: "https://coruscating-salamander-3a0613.netlify.app/",
      img: dashboard,
      git: "https://github.com/abhsin96/Admin-Dashboard",
    },
    {
      name: "Weather App",
      tec: ["REACT", "CSS"],
      link: "https://magnificent-fudge-e6a430.netlify.app/",
      img: weather,
      git: "https://github.com/abhsin96/weatherApp",
    },
  ];
  return (
    <div id="projects" className="md:h-screen">
      <p className="flex justify-center w-full text-orange-600 text-3xl mb-10 uppercase font-bold">
        Projects
      </p>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 h-max ml-10 mr-10">
        {data.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <Marquee
        speed={80}
        style={{ position: "relative", display: "flex", width: "100vw" }}
      >
        <div className="flex justify-between md:w-screen md:px-20 h-24 md:h-36 mt-20 py-5 mb-20">
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={js} alt="js" />
          <img src={tailwind} alt="tailwind" />
          <img src={react} alt="react" />
          <img src={redux} alt="redux" />
        </div>
      </Marquee>
    </div>
  );
};

export default Projects;