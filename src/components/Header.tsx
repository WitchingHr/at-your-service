import React, { FC, useEffect, useState } from "react";

const Header: FC = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const bgStyle = isScrolled ? "bg-white shadow-md gradient" : "bg-transparent";
	const textStyle = isScrolled ? "text-indigo-400" : "text-white text-shadow";
	const buttonStyle = isScrolled
		? "bg-indigo-400 text-white"
		: "bg-white text-indigo-400";

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`fixed top-0 w-full duration-300 ` + bgStyle}>
			<div className="py-8 px-[8%] max-w-[1440px] flex items-center justify-between mx-auto">
				<div className={`text-3xl font-bold duration-300 ` + textStyle}>
					AT Your Service
				</div>
				<a href="#book">
          <button
            className={
              `px-5 py-2 text-md font-medium rounded-full duration-300 ` +
              buttonStyle
            }
          >
            Book an Estimate
          </button>
        </a>
			</div>
		</header>
	);
};

export default Header;
