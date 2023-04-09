import React from "react";
import { beforeEach } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

const user = userEvent.setup();

describe("Page 1", () => {
  it("should render errors if the form is submitted with empty fields", async () => {
    render(<Form />);
    const continueButton = screen.getByText(/continue/i);
    await user.click(continueButton);
    expect(screen.getByText(/please enter a name/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter an email address/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter a phone number/i)).toBeInTheDocument();
  });

  it("should render error if the name field has three words", async () => {
    render(<Form />);
    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, "John Doe Smith");
    const continueButton = screen.getByText(/continue/i);
    await user.click(continueButton);
    expect(screen.getByText(/please enter your full name/i)).toBeInTheDocument();
  });

  it("should render error if the name field has a number", async () => {
    render(<Form />);
    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, "j123");
    const continueButton = screen.getByText(/continue/i);
    await user.click(continueButton);
    expect(screen.getByText(/please enter your full name/i)).toBeInTheDocument();
  });

  it("should render error if the name field has a special character", async () => {
    render(<Form />);
    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, "j@n");
    const continueButton = screen.getByText(/continue/i);
    await user.click(continueButton);
    expect(screen.getByText(/please enter your full name/i)).toBeInTheDocument();
  });

  it("should render error if the phone number field has a letter", async () => {
    render(<Form />);
    const phoneInput = screen.getByLabelText(/phone/i);
    await user.type(phoneInput, "a");
    const continueButton = screen.getByText(/continue/i);
    await user.click(continueButton);
    expect(screen.getByText(/please enter a valid 10 digit phone number/i)).toBeInTheDocument();
  });
});

describe("Page 2", () => {
  beforeEach(async () => {
    render(<Form />);
    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, "John Doe");
    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, "johndoe123@example.com");
    const phoneInput = screen.getByLabelText(/phone/i);
    await user.type(phoneInput, "1234567890");
    const continueButton = screen.getByText(/continue/i);
    await user.click(continueButton);
  });

  it("should render description", () => {
    expect(screen.getByText(/please write a brief description/i)).toBeInTheDocument();
  });

  it("should render step 2 of 3", () => {
    expect(screen.getByText(/step 2 of 3/i)).toBeInTheDocument();
  });

  it("should render errors if the form is submitted with empty fields", async () => {
    const continueButton = screen.getByText(/continue/i);
    await user.click(continueButton);
    expect(screen.getByText(/please enter a description/i)).toBeInTheDocument();
  });

  it("should render error if description is less than 20 characters", async () => {
    const descriptionInput = screen.getByLabelText(/description/i);
    await user.type(descriptionInput, "a");
    const continueButton = screen.getByText(/continue/i);
    await user.click(continueButton);
    expect(screen.getByText(/please enter a description with at least 20 characters/i)).toBeInTheDocument();
  });

  it("should not render error if input is 21 characters", async () => {
    const descriptionInput = screen.getByLabelText(/description/i);
    await user.type(descriptionInput, "a".repeat(21));
    expect(screen.queryByText(/please enter a description with at least 20 characters/i)).not.toBeInTheDocument();
  });

  it("should render error if description is more than 500 characters", async () => {
    const descriptionInput = screen.getByLabelText(/description/i);
    await user.type(descriptionInput, "a".repeat(501));
    expect(screen.getByText(/please enter a description with 500 characters or less/i)).toBeInTheDocument();
  });
});

describe("Page 3", () => {
  beforeEach(async () => {
    render(<Form />);
    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, "John Doe");
    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, "johndoe123@example.com");
    const phoneInput = screen.getByLabelText(/phone/i);
    await user.type(phoneInput, "1234567890");
    const continueButton = screen.getByText(/continue/i);
    await user.click(continueButton);
    const descriptionInput = screen.getByLabelText(/description/i);
    await user.type(descriptionInput, "I would like two bedrooms painted.");
    const continueButton2 = screen.getByText(/continue/i);
    await user.click(continueButton2);
  });

  it("should render step 3 of 3", () => {
    expect(screen.getByText(/step 3 of 3/i)).toBeInTheDocument();
  });

  it("should render each field with a label", () => {
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/phone/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
  });

  it("should render each field with the correct value", () => {
    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toHaveValue("John Doe");
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveValue("johndoe123@example.com");
    const phoneInput = screen.getByLabelText(/phone/i);
    expect(phoneInput).toHaveValue("1234567890");
    const descriptionInput = screen.getByLabelText(/description/i);
    expect(descriptionInput).toHaveValue("I would like two bedrooms painted.");
  });
});
