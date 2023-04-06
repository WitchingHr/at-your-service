import React, { FC } from "react";
import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { FormData } from "../Form";

interface FormPageTwoProps {
  handleData: (data: FormData) => void;
  register: UseFormRegister<FormData>
  handleSubmit: UseFormHandleSubmit<FormData>
  errors: FieldErrors<FormData>
  handleBack: () => void;
}

const FormPageTwo: FC<FormPageTwoProps> = ({ handleData, register, handleSubmit, errors, handleBack }) => {
  return(
    <>
      <div className="w-1/3">
        <div className="mt-4 text-2xl font-medium">Work Required</div>
        <div className="pr-12 text-gray-500">
          Please write a brief description of the work you would
          like to have done.
          <br></br>
          We will contact you to discuss the details.
        </div>
      </div>
      <div className="w-2/3">
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
      </div>
    </>
  );
};

export default FormPageTwo;
