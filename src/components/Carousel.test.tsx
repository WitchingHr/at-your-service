import React from "react";
import { vi } from "vitest";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Carousel from "./Carousel";

const user = userEvent.setup();

describe("Carousel", () => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn();

  it("should render eight images", () => {
   render(<Carousel />);
    const carousel = screen.getByTestId("carousel");
    expect(carousel.children.length).toBe(8);
  });

  it("should render the first image as selected after click", async () => {
    render(<Carousel />);
    const carousel = screen.getByTestId("carousel");
    const firstImage = carousel.children[0];
    await user.click(firstImage);
    expect(firstImage.classList.contains("image-selected")).toBe(true);
  });

  it("should render the first image as not selected after clicking twice", async () => {
    render(<Carousel />);
    const carousel = screen.getByTestId("carousel");
    const firstImage = carousel.children[0];
    await user.click(firstImage);
    await user.click(firstImage);
    expect(firstImage.classList.contains("image-selected")).toBe(false);
  });

  it("should render the modal after clicking the magnifying glass", async () => {
    render(<Carousel />);
    const carousel = screen.getByTestId("carousel");
    const firstImage = carousel.children[0];
    await user.click(firstImage);
    await user.click(screen.getAllByText(/🔍/)[0]);
    expect(screen.getByTestId("modal")).toBeInTheDocument();
  });

  it("should close the modal after clicking the screen", async () => {
    render(<Carousel />);
    const carousel = screen.getByTestId("carousel");
    const firstImage = carousel.children[0];
    await user.click(firstImage);
    await user.click(screen.getAllByText(/🔍/)[0]);
    expect(screen.getByTestId("modal")).toBeInTheDocument();
    await user.click(screen.getByTestId("modal"));
    expect(screen.queryByTestId("modal")).toBeNull();
  });
});