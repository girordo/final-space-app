import React from "react";
import { render, screen } from "@testing-library/react";
import Page404 from "../pages/404";

describe("404 Page", () => {
  it("should render the 404 page", () => {
    render(<Page404 />);

    const header = screen.getByTestId("header");
    const notFound = screen.getByText("Você chegou ao espaço final");
    const footer = screen.getByTestId("footer");

    expect(notFound).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
