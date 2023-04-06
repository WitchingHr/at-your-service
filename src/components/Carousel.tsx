import React, { FC, useEffect, useRef, useState } from "react";

import one from "../assets/img_1.jpeg";
import two from "../assets/img_2.jpeg";
import nineteen from "../assets/img_19.jpeg";
import twenty from "../assets/img_20.jpeg";
import five from "../assets/img_5.jpeg";
import six from "../assets/img_6.jpeg";
import seven from "../assets/img_7.jpeg";
import eight from "../assets/img_8.jpeg";

const images = [one, two, twenty, seven, five, six, eight, nineteen];

const Carousel: FC = () => {
	const [selected, setSelected] = useState<number | null>(null);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>, num: number) => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
		if (e.currentTarget.classList.contains("image-selected")) {
			e.currentTarget.classList.remove("image-selected");
			setSelected(null);
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
		setSelected(num);
	};

	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	useEffect(() => {
		function autoScroll() {
			const carousel = document.getElementById("carousel"); // get the carousel div
			if (!carousel) return;
			const scrollWidth = carousel.scrollWidth; // get the width of the content inside the carousel
			const visibleWidth = carousel.offsetWidth; // get the visible width of the carousel
			const scrollAmount = 1; // set the amount of pixels to scroll at each interval

			// calculate the next scroll position
			const nextScrollLeft = carousel.scrollLeft + scrollAmount;
			if (scrollWidth - carousel.scrollLeft - visibleWidth <= 1) {
				// animate the scroll to the next position
				carousel.scrollTo({
					left: 0,
					behavior: "auto",
				});
			} else {
				carousel.scrollTo({
					left: nextScrollLeft,
					behavior: "auto",
				});
			}
		}
		intervalRef.current = setInterval(autoScroll, 20);
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, []);

	return (
		<section className="gradient-2">
			<div className="flex flex-col justify-center section-container">
				<div id="carousel" className="flex px-4 py-20 overflow-x-scroll">
					{images.map((image, index) => (
						<ImageViewer
							key={index}
							src={images[index]}
							handleClick={handleClick}
							id={index}
							selected={selected}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Carousel;

interface ImageViewerProps {
	src: string;
	handleClick: (e: React.MouseEvent<HTMLDivElement>, num: number) => void;
	id: number;
	selected: number | null;
}

const ImageViewer: FC<ImageViewerProps> = ({
	src,
	handleClick,
	id,
	selected,
}) => {
	const [isSelected, setIsSelected] = useState<boolean>(false);
	const [isZoomed, setIsZoomed] = useState<boolean>(false);

	useEffect(() => {
		if (selected === id) {
			setIsSelected(true);
		} else {
			setIsSelected(false);
		}
	}, [selected]);

	const selectedStyle = isZoomed
		? "opacity-0"
		: isSelected
		? "opacity-100"
		: "opacity-0";

	const handleModal = (e: React.MouseEvent) => {
		e.stopPropagation();
		setIsZoomed(!isZoomed);
	};

	const handleEscape = (e: KeyboardEvent) => {
		if (e.key === "Escape") {
			setIsZoomed(false);
		}
	};

	return (
		<>
			<div
				className="relative basis-1/4 shrink-0 image-normal image-view"
				onClick={(e) => handleClick(e, id)}
			>
				<img src={src} alt="" className="w-full h-full" />
				<button
					onClick={handleModal}
					className={
						`absolute w-10 h-10 text-2xl duration-500 bottom-1 right-1 rounded-full hover:bg-black/30 ` +
						selectedStyle
					}
				>
					🔍
				</button>
			</div>
			{isZoomed && (
				<Modal handleModal={handleModal} handleEscape={handleEscape} id={id} />
			)}
		</>
	);
};

interface ModalProps {
	handleModal: (e: React.MouseEvent) => void;
	handleEscape: (e: KeyboardEvent) => void;
	id: number;
}

const Modal: FC<ModalProps> = ({ handleModal, handleEscape, id }) => {
	const sourceRef = useRef<number>(id);
	const [source, setSource] = useState<number>(sourceRef.current);

	const handleNext = (e: KeyboardEvent) => {
		if (e.key === "ArrowRight") {
			if (sourceRef.current === images.length - 1) {
				sourceRef.current = 0;
				setSource(sourceRef.current);
			} else {
				sourceRef.current += 1;
				setSource(sourceRef.current);
			}
		}
		if (e.key === "ArrowLeft") {
			if (sourceRef.current === 0) {
				sourceRef.current = images.length - 1;
				setSource(sourceRef.current);
			} else {
				sourceRef.current -= 1;
				setSource(sourceRef.current);
			}
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleNext);
		window.addEventListener("keydown", handleEscape);
		return () => {
			window.removeEventListener("keydown", handleNext);
			window.removeEventListener("keydown", handleEscape);
		};
	}, []);

	return (
		<div
			className={`fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black/90 `}
			onClick={handleModal}
		>
			<img src={images[source]} alt="" className="h-[75vh] w-auto" />
		</div>
	);
};
