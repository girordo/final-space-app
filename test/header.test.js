import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Header from "../components/Header/Header";

afterEach(cleanup);

describe("Header component", () => {
  it("should render header component correctly", () => {
    render(<Header />);

    const header = screen.getByTestId("header");
    const mooncake = screen.getByTestId("mooncake");

    expect(header).toBeInTheDocument();
    expect(mooncake).toBeInTheDocument();
  });
});
