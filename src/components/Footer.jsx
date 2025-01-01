import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md p-10">
      <footer>
        <p className="text-slate text-sm">Built and Designed by Prem Kumar S</p>
        <p className="text-center text-slate text-xs pt-1">
          All Rights Reserved ©{" "}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
