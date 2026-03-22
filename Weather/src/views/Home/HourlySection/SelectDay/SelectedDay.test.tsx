import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect } from "vitest";

const setSelectedDay = vi.fn();
vi.mock("@store/storeSelectedDay", () => ({
  default: () => ({
    selectedDay: "Monday",
    setSelectedDay: setSelectedDay,
  }),
}));
vi.mock("@icons/iconArrowDown.svg", () => ({
  default: () => <svg data-testid="icon-arrow-down" />,
}));

import SelectDay from "./SelectDay.client";

const mockData = {
  current: { time: new Date() },
} as any;

describe("SelectDay component", () => {
  it("renders selected day", () => {
    render(<SelectDay data={mockData} />);
    expect(screen.getByTestId("selected-day")).toBeInTheDocument();
  });

  it("opens and closes the day list when clicking on title", async () => {
    render(<SelectDay data={mockData} />);
    const list = screen.getByTestId("days-list");
    const title = screen.getByTestId("selected-day");
    expect(list).not.toHaveClass(/selectDay__listDays_active/);
    await userEvent.click(title);
    expect(list).toHaveClass(/selectDay__listDays_active/);
    await userEvent.click(title);
    expect(list).not.toHaveClass(/selectDay__listDays_active/);
  });

  it("changes selected day when a day is clicked", async () => {
    render(<SelectDay data={mockData} />);
    const title = screen.getByTestId("selected-day");
    await userEvent.click(title);
    const wednesday = screen.getByText("Wednesday");
    await userEvent.click(wednesday);
    expect(setSelectedDay).toHaveBeenCalledWith("Wednesday");
  });
});
