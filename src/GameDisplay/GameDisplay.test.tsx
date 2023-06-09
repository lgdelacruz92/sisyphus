import { render, screen } from "@testing-library/react";
import GameDisplay from "./GameDisplay";

jest.mock("./Components/GameCanvas", () => {
  return {
    __esModule: true,
    default: jest.fn().mockImplementation(() => null),
  };
});

describe("GameDisplay.test.tsx", () => {
  test("game section", () => {
    render(<GameDisplay />);
    expect(screen.getByRole("region", { name: /Game Window/i })).toBeVisible();
    expect(
      screen.getByRole("region", { name: /Highest Scores/i })
    ).toBeVisible();
  });
});
