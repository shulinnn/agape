import React from "react";
import { render, screen } from "@testing-library/react";
import PensionItem from "./PensionItem";

test("renders the pension item", () => {
  ///We have to use real image here..
  const pension = {
    image: "ll",
    pensionName: "Pension One",
  };

  render(<PensionItem {...pension} />);

  expect(screen.getByAltText("Pension One")).toBeInTheDocument();
  expect(screen.getByText("Pension One")).toBeInTheDocument();
});
