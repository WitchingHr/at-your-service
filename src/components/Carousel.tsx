import React, { FC, useEffect, useRef } from "react";
// import { motion, useScroll } from "framer-motion";

import one from "../assets/img_1.jpeg";
import two from "../assets/img_2.jpeg";
import nineteen from "../assets/img_19.jpeg";
import twenty from "../assets/img_20.jpeg";
import five from "../assets/img_5.jpeg";
import six from "../assets/img_6.jpeg";
import seven from "../assets/img_7.jpeg";
import eight from "../assets/img_8.jpeg";

const Carousel: FC = () => {
	const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
		if (e.currentTarget.classList.contains("image-selected")) {
			e.currentTarget.classList.remove("image-selected");
			return;
		}
		const images = document.querySelectorAll(".image-normal");
		images.forEach((image) => {
			image.classList.remove("image-selected");
		});
		e.currentTarget.classList.add("image-selected");
		e.currentTarget.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center",
		});
	};

	const intervalRef = useRef<number | null>(null);



  useEffect(() => {
    function autoScroll() {
      const carousel = document.getElementById("carousel"); // get the carousel div
      if (!carousel) return;
      const scrollWidth = carousel.scrollWidth; // get the width of the content inside the carousel
      const visibleWidth = carousel.offsetWidth; // get the visible width of the carousel
      const scrollAmount = 1; // set the amount of pixels to scroll at each interval
    
      // calculate the next scroll position
      const nextScrollLeft = carousel.scrollLeft + scrollAmount;
      if ((scrollWidth - carousel.scrollLeft) - visibleWidth <= 1) {
        // animate the scroll to the next position
        carousel.scrollTo({
          left: 0,
          behavior: "auto"
        });
      } else {
        carousel.scrollTo({
          left: nextScrollLeft,
          behavior: "auto"
        });
      }
    }
    intervalRef.current = setInterval(autoScroll, 15);
  }, []);

	return (
		<section className="gradient-2">
			<div className="flex flex-col justify-center section-container">
				<div id="carousel" className="flex px-4 py-20 overflow-x-scroll">
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
						src={twenty}
						alt=""
						className="w-1/4 h-auto image-normal"
						onClick={handleClick}
					/>
					<img
						src={seven}
						alt=""
						className="w-1/4 h-auto image-normal"
						onClick={handleClick}
					/>
					<img
						src={five}
						alt=""
						className="w-1/4 h-auto image-normal"
						onClick={handleClick}
					/>
					<img
						src={six}
						alt=""
						className="w-1/4 h-auto image-normal"
						onClick={handleClick}
					/>
					<img
						src={eight}
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
				</div>
			</div>
		</section>
	);
};

export default Carousel;
