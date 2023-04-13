import React, { FC, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { checkCooldown } from "../utils";
import FormPageOne from "./form-pages/FormPageOne";
import FormPageTwo from "./form-pages/FormPageTwo";
import FormPageThree from "./form-pages/FormPageThree";

export interface FormData {
	name: string;
	email: string;
	phone: string;
	description: string;
}

const Form: FC = () => {
	const [page, setPage] = useState<number>(1);
	const [data, setData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		description: "",
	});
	const [submitData, setSubmitData] = useState<boolean>(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [alreadySubmitted, setAlreadySubmitted] = useState<number | null>(null);

	const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

	useEffect(() => {
		const cooldown = checkCooldown();
		if (cooldown) {
			setAlreadySubmitted(15 - cooldown);
		}
		timerRef.current = setInterval(() => {
			const cooldown = checkCooldown();
			if (cooldown) {
				setAlreadySubmitted(15 - cooldown);
			} else {
				setAlreadySubmitted(null);
			}
		}, 60000);
		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
			}
		};
	}, []);

	const handleBack = () => {
		setPage(page - 1);
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const handleData = (data: FormData) => {
		if (page === 1) {
			setPage(2);
		}
		if (page === 2) {
			setPage(3);
		}
		setData({ ...data, ...data });
	};

	const handleFinalSubmit = () => {
		setSubmitData(true);
	};

	return (
		<section id="book" className="form-shadow gradient">
			<div className="section-container">
				<div className="flex items-center justify-between md:pt-8">
					<h2 className="text-3xl font-medium poppins">
						{isSubmitted ? "Booked!" : "Book an Estimate"}
					</h2>
					{isSubmitted === false && (
						alreadySubmitted ? (
							<div className="ml-4 text-3xl text-gray-500 whitespace-nowrap">
								◴
							</div>
					) : (
						<div className="ml-4 text-gray-500 whitespace-nowrap poppins">
							Step {page} of 3
						</div>
					)
					)}
				</div>
				<div className="flex flex-col md:justify-between md:flex-row">
					{alreadySubmitted ? (
						<div className="mt-10 text-gray-500 mb-60 poppins">
							<p>
								Please wait {alreadySubmitted} minute
								{alreadySubmitted === 1 ? "" : "s"} before requesting another
								estimate.
							</p>
							<p className="my-2">
								If you are seeing this and you haven&apos;t booked an estimate yet,
								please email us at:{" "}
							</p>
							<a className="text-indigo-500" href="mailto:atyourservice603@gmail.com">
								atyourservice603@gmail.com
							</a>
							<p className="my-2">or call:</p>
							<a className="text-indigo-500" href="tel:6036202005">(603)&nbsp;620-2005</a>
						</div>
					) : (
						<div className="poppins">
							{page === 1 ? (
								<FormPageOne
									handleData={handleData}
									handleSubmit={handleSubmit}
									register={register}
									errors={errors}
								/>
							) : page === 2 ? (
								<FormPageTwo
									handleData={handleData}
									handleSubmit={handleSubmit}
									register={register}
									errors={errors}
									handleBack={handleBack}
								/>
							) : (
								<FormPageThree
									data={data}
									submitData={submitData}
									handleBack={handleBack}
									handleFinalSubmit={handleFinalSubmit}
									isSubmitted={isSubmitted}
									setIsSubmitted={setIsSubmitted}
								/>
							)}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Form;
