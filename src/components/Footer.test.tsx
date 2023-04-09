import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "./Footer";

const user = userEvent.setup();

it("should render contact information when contact us is clicked", async () => {
  render(<Footer />);
  const contactUsButton = screen.getByText(/contact us/i);
  await user.click(contactUsButton);
  expect(screen.getByText(/620-2005/)).toBeInTheDocument();
  expect(screen.getByText(/atyourservice603@gmail.com/i)).toBeInTheDocument();
});