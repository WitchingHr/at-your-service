import React, { FC } from "react";

import one from "../assets/img_1.jpeg";
import two from "../assets/img_2.jpeg";
import nineteen from "../assets/img_19.jpeg";
import twenty from "../assets/img_20.jpeg";

const Carousel: FC = () => {
	const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
		if (e.currentTarget.classList.contains("image-selected")) {
			e.currentTarget.classList.remove("image-selected");
			return;
		}
		const images = document.querySelectorAll(".image-normal");
		images.forEach((image) => {
      image.classList.remove("image-selected");
		});
		e.currentTarget.classList.add("image-selected");
    e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
	};

	return (
		<section className="bg-slate-100">
			<div className="flex flex-col justify-center section-container">
				<div className="flex px-4 py-20 overflow-x-scroll">
					<img
						src={one}
						alt=""
						className="w-1/4 h-auto image-normal"
						onClick={handleClick}
					/>
					<img
						src={two}
						alt=""
						className="w-1/4 h-auto image-normal"
						onClick={handleClick}
					/>
					<img
						src={nineteen}
						alt=""
						className="w-1/4 h-auto image-normal"
						onClick={handleClick}
					/>
					<img
						src={twenty}
						alt=""
						className="w-1/4 h-auto image-normal"
						onClick={handleClick}
					/>
				</div>
			</div>
		</section>
	);
};

export default Carousel;
