import React, { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

import hero from "../assets/about-hero.jpg";

const About: FC = () => {
	return (
		<section
			className="hero"
			style={{
				backgroundImage: `url(${hero})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<FadeInWhenVisible>
				<div
					className={`flex items-center justify-between min-h-screen section-container duration-700`}
				>
					<h1 className="ml-40 text-6xl font-bold text-white mb-96 text-shadow">
						About Us
					</h1>
					<div className="flex flex-col w-[45%] gap-8 px-10 py-16 text-indigo-700 font-medium border border-white rounded-md drop-shadow-lg bg-white/90">
						<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Consectetur aut reprehenderit maiores, neque facere quas dolorem?
							Vero, rerum nihil sed labore quidem sint autem nisi ipsa commodi?
							Quibusdam, similique reprehenderit.
						</p>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Consectetur aut reprehenderit maiores, neque facere quas dolorem?
							Vero, rerum nihil sed labore quidem sint autem nisi ipsa commodi?
							Quibusdam, similique reprehenderit.
						</p>
						<p className="text-lg text-right">- Allison Thomas</p>
					</div>
				</div>
			</FadeInWhenVisible>
		</section>
	);
};

const FadeInWhenVisible: FC<PropsWithChildren> = ({ children }) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-50%" }}
			transition={{ delay: 0.5, duration: 0.7 }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
		>
			{children}
		</motion.div>
	);
};

export default About;
