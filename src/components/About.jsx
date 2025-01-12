import React from "react";

const About = () => {
  return (
    <div
      id="About"
      className="flex flex-col px-4 sm:px-8 md:px-20 lg:px-40 xl:px-60 justify-center scroll-mt-20"
    >
      <div className="flex items-center mb-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          About
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8">
        <div className="w-full md:w-1/2">
          <p className="text-slate text-justify text-sm md:text-base lg:text-md font-semibold  md:text-justify ">
            As a Software Engineer Intern at NEC Corporation India Pvt Ltd, I am
            actively contributing to innovative projects in the smart city
            domain. My work focuses on designing and implementing solutions that
            enhance urban living by leveraging advanced technologies. I develop
            and test robust backend systems using Python, preprocess and analyze
            data to extract actionable insights, and build intuitive user
            interfaces with Streamlit to present complex data effectively.
          </p>
        </div>
        <div className="w-full md:w-1/4 flex justify-center">
          <img
            alt="Prem Kumar S"
            src={"/assets/me2.jpeg"}
            className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-lg shadow-lg hover:scale-105 hover:shadow-green transition-transform motion-preset-confetti"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
