import React, { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

import fourteen from "../assets/img_14.jpeg";
import sixteen from "../assets/img_16.jpeg";

const Services: FC = () => {
	return (
		<section className="overflow-hidden gradient-2">
			<div className="flex flex-col justify-center gap-6 !pt-8 !pb-10 md:!py-16 section-container">
				<h2 className="text-3xl font-medium text-center text-white md:mb-6 sm:text-left sm:text-4xl text-shadow">
					Our Services
				</h2>

				<div className="flex flex-col items-center md:flex-row">
					<SlideInFromLeftWhenVisible>
						<div className="flex flex-col gap-3 py-10 bg-indigo-300 px-14 service-shadow">
							<h3 className="text-2xl font-bold text-white h3-shadow">
								Interior Painting
							</h3>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
							placeat hic vero consequatur nesciunt sint maiores, alias vitae
							iure assumenda exercitationem earum amet maxime, cum sed
							accusantium voluptatibus error magnam.
						</div>
					</SlideInFromLeftWhenVisible>
					<SlideInFromRightWhenVisible>
						<img
							src={fourteen}
							alt=""
							className="w-full service-shadow"
						/>
					</SlideInFromRightWhenVisible>
				</div>

				<div className="flex flex-col-reverse items-center md:flex-row">
					<SlideInFromRightWhenVisible>
						<img
							src={sixteen}
							alt=""
							className="w-full service-shadow"
						/>
					</SlideInFromRightWhenVisible>
					<SlideInFromLeftWhenVisible>
						<div className="flex flex-col gap-3 py-10 bg-indigo-300 px-14 service-shadow">
							<h3 className="text-2xl font-bold text-white h3-shadow">
								Exterior Painting
							</h3>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
							placeat hic vero consequatur nesciunt sint maiores, alias vitae
							iure assumenda exercitationem earum amet maxime, cum sed
							accusantium voluptatibus error magnam.
						</div>
					</SlideInFromLeftWhenVisible>
				</div>
			</div>
		</section>
	);
};

const SlideInFromLeftWhenVisible: FC<PropsWithChildren> = ({ children }) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-10%" }}
			transition={{ delay: 0.1, duration: 0.7 }}
			variants={{
				visible: { x : 0, opacity: 1 },
				hidden: { x : -100, opacity: 0 },
			}}
		>
			{children}
		</motion.div>
	);
};

const SlideInFromRightWhenVisible: FC<PropsWithChildren> = ({ children }) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: "-10%" }}
			transition={{ delay: 0.5, duration: 0.7 }}
			variants={{
				visible: { x : 0, opacity: 1 },
				hidden: { x : 100, opacity: 0 },
			}}
      className="md:w-3/6 shrink-0"
		>
			{children}
		</motion.div>
	);
};

export default Services;
