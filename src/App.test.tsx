import { render, screen } from "@testing-library/react";
import App from "./App";
describe("App.test.tsx", () => {
  test("navigations should exists", async () => {
    render(<App />);
    expect(await screen.findByRole("link", { name: "About" })).toBeVisible();
  });
});
