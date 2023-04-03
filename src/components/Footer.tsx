import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="text-white bg-gray-900">
      <div className="py-8 px-[8%] max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold">AT Your Service</div>
          <div className="text-gray-400">© 2023 AT Your Service</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
