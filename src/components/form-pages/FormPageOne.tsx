import React, { FC } from "react";
import { FormData } from "../Form";
import { UseFormRegister, UseFormHandleSubmit, FieldErrors } from "react-hook-form";

interface FormPageOneProps {
  handleData: (data: FormData) => void;
  register: UseFormRegister<FormData>
  handleSubmit: UseFormHandleSubmit<FormData>
  errors: FieldErrors<FormData>
}

const FormPageOne: FC<FormPageOneProps> = ({ handleData, register, handleSubmit, errors }) => {
  return(
    <>
      <div className="md:w-1/3">
        <div className="mt-4 text-2xl font-medium">Your Information</div>
        <div className="text-gray-500 md:pr-12">Please enter your contact information</div>
      </div>
      <div className="mt-5 lg:mt-0 md:w-2/3">
        <form
          onSubmit={handleSubmit((data) => handleData(data))}
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <div className="flex flex-col md:gap-3 md:flex-row">
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
            <div className="flex flex-col md:gap-3 md:flex-row">
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
            <div className="flex flex-col md:gap-3 md:flex-row">
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
            className="w-32 px-5 py-2 mt-3 ml-auto mr-4 font-medium text-white bg-indigo-400 rounded-full md:mr-0 md:mt-4 md:mb-8 text-md"
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
};

export default FormPageOne;
