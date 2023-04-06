import React, {
	FC,
	useEffect,
	useState,
	Dispatch,
	SetStateAction,
} from "react";
import { useForm } from "react-hook-form";
import { addJob } from "../firebase";
import { MagicSpinner, HeartSpinner } from "react-spinners-kit";
import { checkCooldown } from "../utils";

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
				<div className="flex items-center justify-between pt-8">
					<h2 className="text-3xl font-medium">
						{isSubmitted ? "Booked!" : "Book an Estimate"}
					</h2>
					{isSubmitted === false && (
						<div className="text-gray-500">Step {page} of 3</div>
					)}
				</div>
				<div className="flex justify-between">
					{alreadySubmitted ? (
						<div className="mt-10 text-gray-500 mb-60">
							Please wait 15 minutes before requesting another estimate
						</div>
					) : (
						<>
							<div className="w-1/3">
								<div className="mt-4 text-2xl font-medium">
									{page === 1
										? "Your Information"
										: page === 2
										? "Work Required"
										: isSubmitted
										? "Thank you for your request"
										: "Review and Submit"}
								</div>
								<div className="pr-12 text-gray-500">
									{page === 1 ? (
										"Please enter your contact information"
									) : page === 2 ? (
										<>
											Please write a brief description of the work you would
											like to have done.
											<br></br>
											We will contact you to discuss the details.
										</>
									) : isSubmitted ? (
										"We will contact you shortly."
									) : (
										"Please review your information and submit your request"
									)}
								</div>
							</div>
							<div className="w-2/3">
								{page === 1 ? (
									<form
										onSubmit={handleSubmit((data) => handleData(data))}
										className="flex flex-col gap-4"
									>
										<div className="flex flex-col gap-1">
											<div className="flex gap-3">
												<label htmlFor="name" className="mt-auto text-gray-500">
													Name
												</label>
												{errors.name && (
													<span className="text-red-700">
														{errors.name?.message}
													</span>
												)}
											</div>
											<input
												{...register("name", {
													required: "Please enter a name",
													maxLength: {
														value: 50,
														message:
															"Please enter a name with 50 characters or less",
													},
													pattern: {
														value: /^[A-Za-z]+( [A-Za-z]+)?$/i,
														message:
															"Please enter your full name. Including both your first and last name, separated by a space",
													},
												})}
												type="text"
												id="name"
												className="px-3 py-2 border-2 border-gray-300 rounded-md"
											/>
										</div>
										<div className="flex flex-col gap-1">
											<div className="flex gap-3">
												<label
													htmlFor="email"
													className="mt-auto text-gray-500"
												>
													Email
												</label>
												{errors.email && (
													<span className="text-red-700">
														{errors.email?.message}
													</span>
												)}
											</div>
											<input
												{...register("email", {
													required: "Please enter an email address",
													maxLength: 250,
												})}
												type="email"
												id="email"
												className="px-3 py-2 border-2 border-gray-300 rounded-md"
											/>
										</div>
										<div className="flex flex-col gap-1">
											<div className="flex gap-3">
												<label
													htmlFor="phone"
													className="mt-auto text-gray-500"
												>
													Phone
												</label>
												{errors.phone && (
													<span className="text-red-700">
														{errors.phone?.message}
													</span>
												)}
											</div>
											<input
												{...register("phone", {
													required: "Please enter a phone number",
													pattern: {
														value: /^\d+$/,
														message:
															"Please enter a valid 10 digit phone number",
													},
													minLength: {
														value: 10,
														message:
															"Please enter a valid 10 digit phone number",
													},
													maxLength: {
														value: 10,
														message:
															"Please enter a valid 10 digit phone number",
													},
												})}
												maxLength={10}
												type="tel"
												id="phone"
												className="px-3 py-2 border-2 border-gray-300 rounded-md"
											/>
										</div>
										<button
											type="submit"
											className="w-32 px-5 py-2 mt-4 mb-8 ml-auto font-medium text-white bg-indigo-400 rounded-full text-md"
										>
											Continue
										</button>
									</form>
								) : page === 2 ? (
									<form
										onSubmit={handleSubmit((data) => handleData(data))}
										className="flex flex-col gap-4"
									>
										<div className="flex flex-col gap-1">
											<div className="flex gap-3">
												<label htmlFor="description" className="text-gray-500">
													Description of Work Required
												</label>
												{errors.description && (
													<span className="text-red-700">
														{errors.description?.message}
													</span>
												)}
											</div>
											<textarea
												rows={8}
												{...register("description", {
													required: "Please enter a description",
													minLength: {
														value: 20,
														message:
															"Please enter a description with at least 20 characters",
													},
													maxLength: {
														value: 500,
														message:
															"Please enter a description with 500 characters or less",
													},
												})}
												id="description"
												className="px-3 py-2 mb-2 border-2 border-gray-300 rounded-md"
											/>
										</div>
										<div className="flex gap-6">
											<button
												onClick={handleBack}
												className="w-32 px-5 py-2 mt-4 mb-8 ml-auto font-medium text-white bg-indigo-400 rounded-full text-md"
											>
												Back
											</button>
											<button className="w-32 px-5 py-2 mt-4 mb-8 font-medium text-white bg-indigo-400 rounded-full text-md">
												Continue
											</button>
										</div>
									</form>
								) : (
									<>
										{submitData ? (
											<Submitter
												data={data}
												isSubmitted={isSubmitted}
												setIsSubmitted={setIsSubmitted}
											/>
										) : (
											<div className="flex flex-col gap-4">
												<div className="flex flex-col gap-1">
													<div className="flex gap-3">
														<label
															htmlFor="name"
															className="mt-auto text-gray-500"
														>
															Name
														</label>
													</div>
													<input
														type="text"
														id="name"
														className="px-3 py-2 border-2 border-gray-300 rounded-md"
														value={data.name}
														disabled
													/>
												</div>
												<div className="flex flex-col gap-1">
													<div className="flex gap-3">
														<label
															htmlFor="email"
															className="mt-auto text-gray-500"
														>
															Email
														</label>
													</div>
													<input
														type="email"
														id="email"
														className="px-3 py-2 border-2 border-gray-300 rounded-md"
														value={data.email}
														disabled
													/>
												</div>
												<div className="flex flex-col gap-1">
													<div className="flex gap-3">
														<label
															htmlFor="phone"
															className="mt-auto text-gray-500"
														>
															Phone
														</label>
													</div>
													<input
														type="tel"
														id="phone"
														className="px-3 py-2 border-2 border-gray-300 rounded-md"
														value={data.phone}
														disabled
													/>
												</div>
												<div className="flex flex-col gap-1">
													<div className="flex gap-3">
														<label
															htmlFor="description"
															className="text-gray-500"
														>
															Description of Work Required
														</label>
													</div>
													<textarea
														rows={4}
														id="description"
														className="px-3 py-2 mb-2 border-2 border-gray-300 rounded-md"
														value={data.description}
														disabled
													/>
												</div>
												<div className="flex gap-6">
													<button
														onClick={handleBack}
														className="w-32 px-5 py-2 mt-4 mb-8 ml-auto font-medium text-white bg-indigo-400 rounded-full text-md"
													>
														Back
													</button>
													<button
														onClick={handleFinalSubmit}
														className="w-32 px-5 py-2 mt-4 mb-8 font-medium text-white bg-indigo-400 rounded-full text-md"
													>
														Submit
													</button>
												</div>
											</div>
										)}
									</>
								)}
							</div>
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default Form;

interface SubmitterProps {
	data: FormData;
	isSubmitted: boolean;
	setIsSubmitted: Dispatch<SetStateAction<boolean>>;
}

const Submitter: FC<SubmitterProps> = ({
	data,
	isSubmitted,
	setIsSubmitted,
}) => {
	useEffect(() => {
		const cooldown = checkCooldown();
		if (!cooldown) {
			addJob(data)
				.then(() => {
					const submit = document.querySelector("#submitting");
					submit?.classList.add("animate-ping");
					setTimeout(() => {
						setIsSubmitted(true);
					}, 1000);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [data]);

	if (isSubmitted === false) {
		return (
			<div className="flex flex-col items-center justify-center mt-4 mb-60">
				<MagicSpinner color={"#818cf8"} />
				<div id="submitting" className="text-xl text-indigo-500">
					Submitting...
				</div>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center justify-center mt-6 mb-60 animate-fadein">
			<HeartSpinner size={40} color={"#818cf8"} />
			<div className="mt-4 text-2xl text-indigo-500 animate-bounce">
				Success!
			</div>
		</div>
	);
};
