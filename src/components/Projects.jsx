import React from "react";
import Card from "./Card";
import myntraImage from "../myntra.png";
import dashboard from "../dashboard.png";
import disney from "../Disney.png";
import css from "../logo/css2.png";
import html from "../logo/html.png";
import js from "../logo/js.png";
import react from "../logo/react.png";
import redux from "../logo/redux.png";
import tailwind from "../logo/tailwind.png";
import syncfusion from "../logo/syncfusion.png";
import Marquee from "react-fast-marquee";

const Projects = () => {
  const data = [
    {
      name: "Myntra Clone",
      tec: [react, css],
      link: "https://sprightly-marzipan-9451ad.netlify.app/",
      img: myntraImage,
      git: "https://github.com/abhsin96/Myntra",
    },
    {
      name: "Admin DashBoard",
      tec: [react, tailwind, syncfusion],
      link: "https://coruscating-salamander-3a0613.netlify.app/",
      img: dashboard,
      git: "https://github.com/abhsin96/Admin-Dashboard",
    },
    {
      name: "Disney+ Clone",
      tec: [react, css, redux],
      link: "https://github.com/abhsin96/Disney-Clone/",
      img: disney,
      git: "https://disney-clone-66d13.web.app/",
    },
  ];
  return (
    <div id="projects" className="h-max mt-10">
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
