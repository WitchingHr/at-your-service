import React, { FC, useEffect, Dispatch, SetStateAction } from "react";
import { addJob } from "../../firebase";
import { MagicSpinner, HeartSpinner } from "react-spinners-kit";
import { checkCooldown } from "../../utils";
import { FormData } from "../Form";

interface FormPageThreeProps {
  data: FormData;
  handleBack: () => void;
  handleFinalSubmit: () => void;
  isSubmitted: boolean;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  submitData: boolean;
}

const FormPageThree: FC<FormPageThreeProps> = ({ data, handleBack, handleFinalSubmit, isSubmitted, setIsSubmitted, submitData }) => {
  return(
    <>
      <div className="w-1/3">
        <div className="mt-4 text-2xl font-medium">
          {isSubmitted
            ? "Thank you for your request"
            : "Review and Submit"}
        </div>
        <div className="pr-12 text-gray-500">
          {isSubmitted ? (
            "We will contact you shortly."
          ) : (
            "Please review your information and submit your request"
          )}
        </div>
      </div>
      <div className="w-2/3">
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
      </div>
    </>
  );
};

export default FormPageThree;

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
