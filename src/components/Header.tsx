import React, { FC, useEffect, useState, useRef } from "react";

const Header: FC = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [isScrolled2, setIsScrolled2] = useState<boolean>(false);
	const wrapStyle = isScrolled ? "wrap-gradient" : "bg-transparent";
	const solidWhite = isScrolled2 ? " solid-white" : "";
	const bgStyle = isScrolled ? "bg-white shadow-md gradient" : "bg-transparent";
	const textStyle = isScrolled ? "text-indigo-600" : "text-white text-shadow";
	const buttonStyle = isScrolled
		? "bg-indigo-600 text-white"
		: "bg-white text-indigo-600 button-shadow-blue";

	const headerRef = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
		if (!headerRef.current) return;
		if (window.scrollY > window.innerHeight - headerRef.current.offsetHeight) {
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
		<header
			ref={headerRef}
			className={
				`z-50 fixed top-0 w-full duration-300 ` + wrapStyle + solidWhite
			}
		>
			<div className={`w-full ` + bgStyle}>
				<div
					className={`py-5 px-5 sm:py-8 sm:px-[8%] max-w-[1440px] flex items-center justify-between mx-auto`}
				>
					<a href="/">
						<div className={`text-2xl sm:text-4xl duration-300 headerFont ` + textStyle}>
							AT Your Service...
						</div>
					</a>
					<a href="#book">
						<button
							className={
								`text-sm px-5 py-2 md:text-md font-medium rounded-full duration-300 button-shadow ` +
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
