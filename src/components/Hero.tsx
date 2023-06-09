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
				<h1 className="mt-auto text-4xl font-medium text-white sm:text-6xl poppins text-shadow">
					Painting<br></br>
					<span className="text-indigo-600 amp-shadow">&</span> Organizing
				</h1>
				<p className="mr-4 text-lg font-light text-white sm:mr-0 sm:text-xl mb-28 poppins text-shadow">
					Highly rated female owned painting company serving<br></br>Southern
					New Hampshire and Northern Massachusetts.<br></br>Known for our
					quality work and competitive pricing.
				</p>
				<div className="mt-auto"></div>
			</div>
		</section>
	);
};

export default Hero;
