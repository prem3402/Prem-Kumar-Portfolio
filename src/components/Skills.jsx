import React from "react";

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript (ES6+)", "SQL"]
  },
  {
    category: "Frameworks",
    skills: [
      "React.JS",
      "Redux",
      "Node.JS",
      "Express.JS",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Streamlit"
    ]
  },
  {
    category: "Web Technologies",
    skills: ["HTML", "CSS", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Tools / Platforms",
    skills: [
      "Git & Github",
      "Docker",
      "Amazon Web Services (AWS)",
      "Linux",
      "Jenkins",
      "CI/CD pipeline",
      "Github Actions",
      "Ansible",
      "Postman",
      "VS Code"
    ]
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "DynamoDB"]
  },
  {
    category: "Other",
    skills: ["RESTful APIs", "Data Structures", "Algorithms", "OOPs"]
  }
];

const Skills = () => {
  return (
    <div
      id="Skills"
      className="flex flex-col px-4 sm:px-8 md:px-20 lg:px-40 xl:px-60 justify-center scroll-mt-16"
    >
      <section className="flex flex-col mx-auto ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6  sm:text-left">
          Skills
        </h1>
        <div className="space-y-6 md:space-y-8">
          {skillsData.map((section) => (
            <div
              key={section.category}
              className="flex flex-col md:flex-row gap-4"
            >
              <h3 className="text-lg md:text-lg font-semibold text-lightslate md:w-1/4">
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-4 md:w-3/4">
                {section.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 text-xs md:text-sm lg:text-md rounded-lg font-mono bg-lightnavy text-lightslate hover:shadow-md hover:scale-105 hover:shadow-green transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
