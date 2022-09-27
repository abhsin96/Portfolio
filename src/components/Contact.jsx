import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="md:h-screen h-max flex flex-col items-center ml-10 mr-10"
    >
      <div>
        <div className="mb-4 text-5xl tracking-tight font-extrabold text-center text-orange-700">
          Contact me
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center lg:grid lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p className="text-3xl text-orange-700 font-bold">Get in Touch</p>
          <p className="text-xl ">
            Got a project? Reach out and let's work together on something
            exciting. Big or small. Mobile opr web
          </p>
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 48 48"
              style={{ fill: "#000000" }}
            >
              <path
                fill="#e0e0e0"
                d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"
              ></path>
              <path
                fill="#d9d9d9"
                d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"
              ></path>
              <path
                fill="#eee"
                d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"
              ></path>
              <path
                fill="#e0e0e0"
                d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"
              ></path>
              <path
                fill="#ca3737"
                d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"
              ></path>
              <path
                fill="#f5f5f5"
                d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"
              ></path>
              <path
                fill="#e84f4b"
                d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"
              ></path>
            </svg>
            <span>abhsin96@gmail.com</span>
          </div>
          <div className="flex gap-4">
            <svg
              class="w-6 h-6 text-blue-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
            </svg>
            <a
              href="https://www.linkedin.com/in/abhishek-singh-627201108/"
              target="blank"
            >
              Linkedin
            </a>
          </div>
          <div className="flex gap-4">
            <i class="github icon"></i>
            <a href="https://github.com/abhsin96" target="blank">
              GitHub
            </a>
          </div>
        </div>
        <section class="bg-white ">
          <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
              Message me
            </h2>

            <form action="#" class="space-y-8">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                />
                <input
                  type="email"
                  placeholder="Your email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Subject"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <textarea
                  id="message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Message..."
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                }}
                class="py-3 px-5 text-base font-medium text-center text-white bg-orange-600 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-600"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
