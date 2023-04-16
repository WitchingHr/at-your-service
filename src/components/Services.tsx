import React, { FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";

import sixteen from "../assets/img_16.jpeg";
import fifteen from "../assets/img_15.jpeg";

const Services: FC = () => {
	return (
		<section id="services" className="overflow-hidden gradient-2">
			<div className="flex flex-col justify-center gap-6 !pt-8 !pb-10 md:!py-16 section-container">
				<h2 className="text-3xl font-medium text-center text-white poppins md:mb-6 sm:text-left sm:text-4xl text-shadow">
					Our Services Include
				</h2>

				<div className="flex flex-col items-center md:flex-row">
					<SlideInFromLeftWhenVisible>
						<div className="flex flex-col gap-3 px-10 py-8 bg-indigo-300 md:py-10 md:px-14 service-shadow">
							<h3 className="text-2xl font-bold text-white h3-shadow poppins">
								Interior Painting
							</h3>
							<div className="text-lg font-light md:text-base services-text poppins">
								<p>
									Transform your living spaces with our expert painting
									services. We provide comprehensive color consultations to help
									you find the perfect shade for your home. We exclusively use
									top-of-the-line paint products, ensuring the highest quality
									finish for every project.
								</p>
								<br />
								<p>
									To further add value to our services, we offer exclusive
									discounts on all Sherwin Williams paint purchases made through
									our company.
								</p>
								<p>
									Trust us to bring a new level of vibrancy and life to your
									interiors with our exceptional painting services.
								</p>
							</div>
						</div>
					</SlideInFromLeftWhenVisible>
					<SlideInFromRightWhenVisible>
						<img src={fifteen} alt="" className="w-full service-shadow" />
					</SlideInFromRightWhenVisible>
				</div>

				<div className="flex flex-col-reverse items-center md:flex-row">
					<SlideInFromRightWhenVisible>
						<img src={sixteen} alt="" className="w-full service-shadow" />
					</SlideInFromRightWhenVisible>
					<SlideInFromLeftWhenVisible>
						<div className="flex flex-col gap-3 px-10 py-8 bg-indigo-300 md:py-10 md:px-14 service-shadow">
							<h3 className="text-2xl font-bold text-white h3-shadow poppins">
								Organizing
							</h3>
							<div className="text-lg font-light md:text-base poppins services-text">
								<p>
									We understand the importance of keeping your home tidy and
									organized. If you are feeling overwhelmed by excess clutter in
									your living spaces, we are here to help. We have assisted
									numerous clients in establishing personalized systems of
									organization that work best for them.
								</p>
								<br />
								<p>
									Our services include small closet design, decluttering
									solutions, garage organization, and home storage space
									management.
								</p>
								<br />
								<p>
									Trust us to provide effective solutions that will help
									transform your living spaces into a more organized and
									functional environment.
								</p>
							</div>
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
				visible: { x: 0, opacity: 1 },
				hidden: { x: -100, opacity: 0 },
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
				visible: { x: 0, opacity: 1 },
				hidden: { x: 100, opacity: 0 },
			}}
			className="md:w-3/6 shrink-0"
		>
			{children}
		</motion.div>
	);
};

export default Services;
