import { render, screen } from "@testing-library/react";
import Navbar from "./navbar";

test("renders navbar with text LOL", () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/LOL/i);
  expect(linkElement).toBeInTheDocument();
});
