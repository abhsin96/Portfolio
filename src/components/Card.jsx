import React from "react";

const Card = ({ name, link, tec, img, git }) => {
  return (
    <div className="card transform transition border-r-4 duration-500 hover:scale-110 h-max flex flex-col gap-2">
      <div className="flex flex-col justify-between gap-2">
        <img className="h-full w-full" src={img} alt={name} />
        <p className="flex justify-center text-xl font-bold text-orange-800">
          {name}
        </p>
        <p className="flex justify-between text-xl font-bold text-orange-800">
          {tec.map((tec, idx) => (
            <img className="h-20 m-2" key={idx} src={tec} />
          ))}
        </p>
      </div>
      <div className="flex justify-between ">
        <a href={link} target="blank">
          <button
            type="button"
            class="py-3 px-5 text-base font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-600"
          >
            Live Demo
          </button>
        </a>
        <a href={git} target="blank">
          <button
            type="button"
            class="py-3 px-5 text-base font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-600"
          >
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
