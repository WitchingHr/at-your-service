import React, { FC } from "react";
import { useForm } from "react-hook-form";

const Form: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<div id="book" className="mb-8 section-container">
			<div className="flex items-center justify-between py-8">
				<div className="text-3xl font-medium">Book an Estimate</div>
				<div className="text-gray-400">Step 1 of 3</div>
			</div>
			<div className="flex justify-between">
				<div className="w-1/3">
					<div className="text-2xl font-medium">Your Information</div>
					<div className="text-gray-400">
						Please enter your information below
					</div>
				</div>
				<div className="w-2/3">
					<form
						onSubmit={handleSubmit((data) => console.log(data))}
						className="flex flex-col gap-4"
					>
						<div className="flex flex-col gap-1">
							<label htmlFor="name" className="text-gray-400">
								Name
							</label>
							<input
								{...register("name")}
								type="text"
								id="name"
								className="px-3 py-2 border-2 border-gray-300 rounded-md"
							/>
						</div>
						<div className="flex flex-col gap-1">
							<label htmlFor="email" className="text-gray-400">
								Email
							</label>
							<input
								{...register("email")}
								type="email"
								id="email"
								className="px-3 py-2 border-2 border-gray-300 rounded-md"
							/>
						</div>
						<div className="flex flex-col gap-1">
							<label htmlFor="phone" className="text-gray-400">
								Phone
							</label>
							<input
								{...register("phone")}
								type="text"
								id="phone"
								className="px-3 py-2 border-2 border-gray-300 rounded-md"
							/>
						</div>
						<button className="w-32 px-5 py-2 mt-4 ml-auto font-medium text-white bg-indigo-400 rounded-full text-md">
							Continue
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;
