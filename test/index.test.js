import React from "react";
import {
  screen,
  render,
  cleanup,
  getByTestId,
  getByText,
} from "@testing-library/react";
import Home from "../pages/index";

afterEach(cleanup);

describe("Home page", () => {
  it("should render Home page correctly", () => {
    render(<Home />);

    const header = screen.getByTestId("header");
    const titleText = screen.getByTestId("titleText");
    const paragraphText = screen.getByText(
      "Só que dessa vez consumindo a API do Final Space",
    );
    const footer = screen.getByTestId("footer");

    expect(header).toBeInTheDocument();
    expect(titleText).toBeInTheDocument();
    expect(paragraphText).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
