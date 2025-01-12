import React from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const Intro = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-green-500 to-blue-400 p-5">
        <div className="w-max sm:w-max text-center">
          <p className="sm:animate-typing animate-typing-fast overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-2 text-4xl sm:text-5xl font-bold text-white">
            Hi, <span className="text-green">Prem</span> Here.
          </p>
          <p className="text-lg sm:text-2xl mt-2 text-slate motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md font-l font-semibold pt-2">
            I Create Stuffs.
          </p>
        </div>
        <div className="max-w-full sm:max-w-2xl mt-4 text-center text-slate motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md pb-10 px-4 sm:px-0">
          <p className="font-semibold text-justify text-sm sm:text-base">
            I'm a software Engineer based in Bengaluru, India, passionate about
            large-scale, high-impact products and deeply interested in Cloud
            Computing and DevOps. I thrive on designing and building innovative
            solutions that drive efficiency, scalability, and performance in
            modern software systems.
          </p>
        </div>
        <div className="w-full sm:w-max text-center mt-4 border-x-2 border-y-2 p-4 sm:p-5 rounded-md border-green motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md motion-preset-confetti">
          <a
            href="/assets/Resume_Prem_Kumar_S.pdf"
            download="Resume_Prem_Kumar_S.pdf"
            className="flex items-center justify-center text-green space-x-2"
          >
            <InsertDriveFileIcon style={{ fontSize: "25px" }} />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Intro;
