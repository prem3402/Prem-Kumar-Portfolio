import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const projects = [
  {
    title:
      "Detecting Lung and Colon Cancer Using ResNet-50 on Histopathology Images",
    description:
      "A deep learning system leveraging the ResNet-50 architecture to analyze histopathology images for the detection of lung and colon cancer, enabling accurate classification and aiding in early diagnosis.",
    tags: [
      "Python",
      "Deep Learning",
      "Machine Learning",
      "Image Classification",
      "TensorFlow",
      "PyTorch"
    ],
    link: "https://github.com/prem3402/Detecting-Lung-and-Colon-Cancer-Using-ResNet-50-on-Histopathology-Images"
  },
  {
    title: "EventVue (Event Management System)",
    description:
      "An event management system built using React for the frontend and Node.js for the backend, providing users with a seamless platform to create, manage, and attend events, ensuring efficient organization and a user-friendly experience.",
    tags: [
      "JavaScript",
      "React.JS",
      "Node.JS",
      "Express.JS",
      "Frontend",
      "Backend"
    ],
    link: "https://github.com/prem3402/EventVue"
  },
  {
    title: "Sentimental Analysis using NLP",
    description:
      "A natural language processing (NLP) system designed to perform sentiment analysis by identifying and classifying the emotional tone of text data, enabling insights into opinions, reviews, and customer feedback.",
    tags: ["Python", "NLP", "Sentiment Analysis", "Text Processing"],
    link: "https://github.com/prem3402/Sentimental-Analysis-using-NLP"
  },
  {
    title: "Automated File Compression and Cloud Upload System Using Python",
    description:
      "A Python-based automation system that efficiently compresses files and uploads them to a local server or cloud storage, streamlining data management and ensuring secure and optimized file handling.",
    tags: ["Python", "Automation", "File Compression", "Cloud Storage"],
    link: "https://github.com/prem3402/Prem-Kumar-Portfolio"
  }
];

const Projects = () => {
  return (
    <div
      className="flex flex-col px-4 sm:px-8 md:px-20 lg:px-40 xl:px-60 mt-10 md:mt-20 scroll-mt-16"
      id="Projects"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
          >
            <div className="bg-lightnavy p-6 rounded-lg hover:shadow-md hover:shadow-green transition-transform hover:scale-105 duration-300 min-h-[350px] flex flex-col justify-center">
              <div className="flex items-center mb-3">
                <GitHubIcon className="text-green mr-2" />
                <h2 className="text-lg sm:text-xl font-semibold text-white">
                  {project.title}
                </h2>
              </div>
              <p className="text-lightslate flex-grow mb-4 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-lightestnavy text-slate text-xs sm:text-sm font-medium py-1 px-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
