import React, {
	FC,
	useEffect,
	useState,
} from "react";
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
	const [submitData, setSubmitData] = useState<boolean>(true);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [alreadySubmitted, setAlreadySubmitted] = useState<boolean>(false);

	useEffect(() => {
		const cooldown = checkCooldown();
		if (cooldown) {
			setAlreadySubmitted(true);
		}
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
		<section className="form-shadow gradient">
			<div id="book" className="section-container">
				<div className="flex items-center justify-between md:pt-8">
					<h2 className="text-3xl font-medium">
						{isSubmitted ? "Booked!" : "Book an Estimate"}
					</h2>
					{isSubmitted === false && (
						<div className="ml-4 text-gray-500 whitespace-nowrap">Step {page} of 3</div>
					)}
				</div>
				<div className="flex flex-col md:justify-between md:flex-row">
					{alreadySubmitted ? (
						<div className="mt-10 text-gray-500 mb-60">
							Please wait 15 minutes before requesting another estimate
						</div>
					) : (
						<>
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
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default Form;
