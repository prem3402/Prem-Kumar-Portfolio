import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "NEC Corporation India Pvt Ltd",
      title: "Software Developer Intern",
      location: "Bengaluru",
      duration: "06/2022 - PRESENT",
      details: [
        "Developed an interactive data visualization website using Streamlit, improving user engagement by 40%, while streamlining data preprocessing pipelines with Python for a dataset of over 500,000 entries, and designing API validation protocols with Postman to ensure seamless integration of real-time data streams.",
        "Coordinated with cross-functional teams to align project goals, reducing turnaround time by 25%, and optimized data processing workflows by automating tasks to minimize manual work and increase productivity."
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
