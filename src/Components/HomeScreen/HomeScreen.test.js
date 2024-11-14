import { render, screen } from "@testing-library/react";
import HomeScreen from "./HomeScreen";

test("Renders the HomeScreen component correctly", () => {
  render(<HomeScreen />);
  expect(screen.getByText("Hello World!")).toBeInTheDocument();
});
