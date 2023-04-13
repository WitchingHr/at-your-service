import React, { FC, useRef } from "react";

import heroImage from "../assets/hero-rev.jpg";

const Hero: FC = () => {
	const ref = useRef<HTMLDivElement>(null);

	return (
		<section
			ref={ref}
			className="hero"
			style={{
				backgroundImage: `url(${heroImage})`,
			}}
		>
			<div className="flex flex-col justify-center min-h-screen gap-3 section-container">
				<h1 className="mt-auto text-4xl font-medium text-white sm:text-6xl poppins">
					Painting<br></br>
					<span className="text-indigo-500">&</span> Organizing
				</h1>
				<p className="mr-4 text-lg font-light text-white md:font-extralight sm:mr-0 sm:text-xl mb-28 poppins">
					Highly rated female owned painting company serving<br></br>Southern
					New Hampshire and Northern Massachusetts.<br></br>Known for our
					quality work and competitive pricing.
				</p>
				<div className="mt-auto"></div>
				{/* <div className="text-xl font-light text-white poppins">
					<span className="text-2xl font-medium">Work</span>{" "}
					[wurk] -{" "}
					<span className="font-normal">verb</span>
					; an expression of{" "}
					<span className="font-medium text-indigo-500">love</span>{" "}
					in service to mankind
				</div> */}
			</div>
		</section>
	);
};

export default Hero;
