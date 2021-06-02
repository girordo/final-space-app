import React from "react";
import { render, screen } from "@testing-library/react";
import Page404 from "../pages/404";

describe("HomePage", () => {
  it("should render the heading", () => {
    render(<Page404 />);

    const notFound = screen.getByText(
      "Testing Next.js With Jest and React Testing Library",
    );

    expect(notFound).toBeInTheDocument();
  });
});
