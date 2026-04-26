import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: mock }),
}));

import NotFound from "./not-found";

describe("From not-found page to home", () => {
  it("click on button, that redirect to home", async () => {
    render(<NotFound />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(mock).toHaveBeenCalledWith("/");
  });
});
