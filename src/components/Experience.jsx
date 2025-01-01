import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "NEC Corporation India Pvt Ltd",
      title: "Software Developer Intern",
      location: "Bengaluru",
      duration: "06/2022 - PRESENT",
      details: [
        "Spearheaded the design and implementation of Account Insights, enabling real-time recommendations, optimizing return on investment, and increasing user retention by 10%.",
        "Led a team of 4 engineers and provided mentorship to junior developers, driving team development and ensuring successful project delivery."
      ],
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "Streamlit",
        "Docker"
      ]
    }
  ];

  return (
    <div
      className="flex flex-col px-4 sm:px-8 md:px-20 lg:px-40 xl:px-60 mt-10 md:mt-20 scroll-mt-16"
      id="Experience"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
        Experience
      </h1>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="mb-8 bg-lightnavy p-6 rounded-lg hover:shadow-lg hover:shadow-green transition-transform hover:scale-105"
        >
          <h2 className="text-lg md:text-xl font-bold text-green">
            {exp.company}
          </h2>
          <h3 className="text-base md:text-lg font-medium text-lightslate mt-1">
            {exp.title} - <span>{exp.duration}</span>
          </h3>
          <p className="text-sm md:text-base text-lightslate mt-1">
            {exp.location}
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-lightslate mt-4">
            {exp.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-lightestnavy text-slate px-3 py-1 text-xs md:text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
