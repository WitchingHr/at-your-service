import React, {
	FC,
	useRef,
	useEffect,
	useState,
	SetStateAction,
	Dispatch,
} from "react";
import Hammer from "hammerjs";

import one from "../assets/img_1.jpeg";
import two from "../assets/img_2.jpeg";
import nineteen from "../assets/img_19.jpeg";
import twenty from "../assets/img_20.jpeg";
import five from "../assets/img_5.jpeg";
import six from "../assets/img_6.jpeg";
import seven from "../assets/img_7.jpeg";
import eight from "../assets/img_8.jpeg";
import twentyone from "../assets/img_21.jpeg";
import twentythree from "../assets/img_23.jpeg";

const images = [one, two, twenty, seven, five, six, eight, nineteen, twentyone, twentythree];
const images1 = [one, two, twenty, seven];
const images2 = [five, six, eight, nineteen];
const images3 = [twentyone, twentythree];

const MobileGallery: FC = () => {
	const [page, setPage] = useState<number>(1);
	const pageRef = useRef<number>(1);
	const containerRef = useRef<HTMLElement>(null);
	const gridRef = useRef<HTMLDivElement>(null);

	function handleSwipeLeft() {
		if (pageRef.current === 3) return;
		pageRef.current = pageRef.current + 1;
		movePage(pageRef.current - 1);
		setPage(p => p + 1);
	}

	function handleSwipeRight() {
		if (pageRef.current === 1) return;
		pageRef.current = pageRef.current - 1;
		movePage(pageRef.current - 1);
		setPage(p => p - 1);
	}

	function movePage(pageIndex: number) {
		if (!gridRef.current) return;
		gridRef.current.style.transform = `translateX(${-pageIndex * 100}%)`;
	}

	const rightStyle = page !== 3 ? "opacity-100" : "opacity-50";
	const leftStyle = page !== 1 ? "opacity-100" : "opacity-50";

	useEffect(() => {
		if (!containerRef.current) return;
		const hammer = new Hammer(containerRef.current);
		hammer.on("swipeleft", handleSwipeLeft);
		hammer.on("swiperight", handleSwipeRight);

		return () => {
			hammer.off("swipeleft", handleSwipeLeft);
			hammer.off("swiperight", handleSwipeRight);
		};
	}, []);

	const [selected, setSelected] = useState<number | null>(null);

	const handleImageClick = (index: number) => {
		setSelected(index);
	};

	return (
		<>
			<section
				className="relative overflow-hidden gradient-2"
				ref={containerRef}
			>
				<div className="flex pt-8 duration-500 flex-nowrap" ref={gridRef}>
					<div id="page-1" className="min-w-full">
						<div
							className="grid grid-cols-2 grid-rows-2 gap-7 px-7"
						>
							{images1.map((image, index) => (
								<img
									key={index}
									src={image}
									alt=""
									className="w-full h-full image-mobile"
									onClick={() => handleImageClick(index)}
								/>
							))}
						</div>
					</div>
					<div id="page-2" className="min-w-full">
						<div
							className="grid grid-cols-2 grid-rows-2 gap-7 px-7"
						>
							{images2.map((image, index) => (
								<img
									src={image}
									alt=""
									key={index}
									className="w-full h-full image-mobile"
									onClick={() => handleImageClick(index + 4)}
								/>
							))}
						</div>
					</div>
					<div id="page-3" className="min-w-full">
						<div
							className="grid grid-cols-2 grid-rows-2 gap-7 px-7"
						>
							{images3.map((image, index) => (
								<img
									src={image}
									alt=""
									key={index}
									className="w-full h-full image-mobile"
									onClick={() => handleImageClick(index + 8)}
								/>
							))}
						</div>
					</div>
				</div>
				<div className="flex gap-40 pt-5 pb-7">
					<button
						className={
							`w-10 h-10 ml-auto text-6xl leading-10 text-white gallery-button ` +
							leftStyle
						}
						onClick={handleSwipeRight}
					>
						‹
					</button>
					<button
						className={
							`w-10 h-10 mr-auto text-6xl leading-10 text-white gallery-button ` +
							rightStyle
						}
						onClick={handleSwipeLeft}
					>
						›
					</button>
				</div>
			</section>
			{selected !== null && (
				<Modal selected={selected} setSelected={setSelected} />
			)}
		</>
	);
};

export default MobileGallery;

interface ModalProps {
	selected: number | null;
	setSelected: Dispatch<SetStateAction<number | null>>;
}

const Modal: FC<ModalProps> = ({ selected, setSelected }) => {
	if (selected === null) return null;
	const idRef = useRef<number>(selected);
	const imageRef = useRef<HTMLDivElement>(null);

	function handleSwipeLeft() {
		if (idRef.current === images.length - 1 || idRef.current === null) return;
		idRef.current = idRef.current + 1;
		setSelected(idRef.current + 1);
	}

	function handleSwipeRight() {
		if (idRef.current === 0 || idRef.current === null) return;
		idRef.current = idRef.current - 1;
		setSelected(idRef.current - 1);
	}

	useEffect(() => {
		if (!imageRef.current) return;
		const hammer = new Hammer(imageRef.current);
		hammer.on("swipeleft", handleSwipeLeft);
		hammer.on("swiperight", handleSwipeRight);

		return () => {
			hammer.off("swipeleft", handleSwipeLeft);
			hammer.off("swiperight", handleSwipeRight);
		};
	}, []);

	return (
		<div
			className={`fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-black/90 `}
		>
			{selected !== null && (
				<div className="relative">
					<img src={images[idRef.current]} alt="" className="h-[75vh] w-auto" />
					<div
						className="absolute w-full h-[90%] top-[10%]"
						ref={imageRef}
					></div>
					<button
						className="absolute top-0 right-0 w-10 h-10 text-3xl font-bold text-center text-white gallery-button"
						onClick={() => setSelected(null)}
					>
						✕
					</button>
				</div>
			)}
		</div>
	);
};
