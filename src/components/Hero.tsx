import React, { FC, useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";

import heroImage from "../assets/hero-rev.jpg";

const Hero: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const myRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(myRef, { margin: "-15%" });
  const isInView2 = useInView(myRef, { margin: "-25%" });
  const headingStyle = isInView ? "text-transparent" : "text-white";
  const ampStyle = isInView ? "text-transparent" : "text-indigo-500";
  const pStyle = isInView2 ? "text-transparent" : "text-white";

	return (
		<section
      ref={ref}
			className="hero"
			style={{
				backgroundImage: `url(${heroImage})`,
				// backgroundSize: `${100 + scrollY / 15}%`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="flex flex-col justify-center min-h-screen gap-3 section-container">
				<h1 className={`text-6xl font-bold duration-500 mt-auto ` + headingStyle}>
					Painting<br></br><span className={`duration-500 ` + ampStyle}>&</span> Organizing
				</h1>
				<p className={`text-xl italic mb-28 duration-500 ` + pStyle}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>Rem
					facere ducimus officia ab? Inventore, perspiciatis modi.
				</p>
        <div className="mt-auto" ref={myRef}></div>
			</div>
		</section>
	);
};

export default Hero;
