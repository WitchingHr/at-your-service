import React, { FC, useEffect, useState } from "react";

const Header: FC = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [isScrolled2, setIsScrolled2] = useState<boolean>(false);
	const wrapStyle = isScrolled ? "wrap-gradient" : "bg-transparent";
  const solidWhite = isScrolled2 ? " solid-white" : "";
	const bgStyle = isScrolled ? "bg-white shadow-md gradient" : "bg-transparent";
	const textStyle = isScrolled ? "text-indigo-400" : "text-white text-shadow";
	const buttonStyle = isScrolled
		? "bg-indigo-400 text-white"
		: "bg-white text-indigo-400 button-shadow-blue";

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
		if (window.scrollY > 905) {
			setIsScrolled2(true);
		} else {
			setIsScrolled2(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`z-50 fixed top-0 w-full duration-300 ` + wrapStyle + solidWhite}>
			<div className={`w-full ` + bgStyle}>
        <div className={`py-8 px-[8%] max-w-[1440px] flex items-center justify-between mx-auto`}>
          <a href="/">
            <div className={`text-3xl font-bold duration-300 ` + textStyle}>
              AT Your Service
            </div>
          </a>
          <a href="#book">
                  <button
                    className={
                      `px-5 py-2 text-md font-medium rounded-full duration-300 button-shadow ` +
                      buttonStyle
                    }
                  >
                    Book an Estimate
                  </button>
                </a>
        </div>
      </div>
		</header>
	);
};

export default Header;
