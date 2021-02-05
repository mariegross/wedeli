import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders google react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/To Google/i);
  expect(linkElement).toBeInTheDocument();
});
