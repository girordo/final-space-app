import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Footer from "../components/Footer";

afterEach(cleanup);

describe("Footer component", () => {
  it("should render footer component correctly", () => {
    render(<Footer />);

    const footer = screen.getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
});
