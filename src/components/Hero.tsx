import React, { FC, useEffect, useState } from "react";

import heroImage from "../assets/hero-rev.jpg";

const Hero: FC = () => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);
	const [isScrolled2, setIsScrolled2] = useState<boolean>(false);
	const headingStyle = isScrolled ? "text-transparent" : "text-white";
	const pStyle = isScrolled2 ? "text-transparent" : "text-white";

	const handleScroll = () => {
		const hero: HTMLElement | null = document.querySelector(".hero");
		if (hero) {
			hero.style.backgroundSize = `${120 + window.scrollY / 15}%`;
			hero.style.top = `-${window.scrollY / 15}%`;
		}
		// console.log(window.scrollY)
		if (window.scrollY > 240) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
		if (window.scrollY > 355) {
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
		<section
			className="hero"
			style={{
				backgroundImage: `url(${heroImage})`,
				backgroundSize: "120%",
				backgroundPosition: "center",
			}}
		>
			<div className="flex flex-col justify-center min-h-screen gap-3 section-container">
				<h1 className={`text-6xl font-bold duration-500 ` + headingStyle}>
					Lorem ipsum dolor sit<br></br>amet consectetur
				</h1>
				<p className={`text-xl italic mb-28 duration-500 ` + pStyle}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>Rem
					facere ducimus officia ab? Inventore, perspiciatis modi.
				</p>
			</div>
		</section>
	);
};

export default Hero;
