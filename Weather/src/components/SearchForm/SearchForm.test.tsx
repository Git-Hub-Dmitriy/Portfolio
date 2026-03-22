import { it, describe, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

vi.mock("@icons/iconSearch.svg", () => ({
  default: () => <svg data-testid="icon-search" />,
}));
const replaceMock = vi.fn();
vi.mock("@services/external/getCities", () => ({
  default: vi.fn(() => Promise.resolve({ results: [{ name: "Kyiv" }] })),
}));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: replaceMock }),
  usePathname: () => "/test",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("@components/SearchForm/ListSearch/ListSearch.client.tsx", () => ({
  default: ({ setSelected }: any) => (
    <button
      onClick={() =>
        setSelected({
          name: "Kyiv",
          latitude: "50.45",
          longitude: "30.52",
          country: "Ukraine",
        })
      }
    >
      select city
    </button>
  ),
}));

import SearchForm from "./SearchForm.server";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false },
  },
});

describe("searchForm component test", () => {
  it("updates input value when user enters", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SearchForm display="grid" />
      </QueryClientProvider>,
    );
    const input = screen.getByPlaceholderText("Search for a place...");
    await userEvent.type(input, "Kyiv");
    expect(input).toHaveValue("Kyiv");
  });

  it("applies error class when input length < 3", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SearchForm display="grid" />
      </QueryClientProvider>,
    );
    const input = screen.getByRole("searchbox");
    await userEvent.type(input, "ab");
    expect(input.className).toMatch(/red/);
  });

  it("shows loader when fetching data", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SearchForm display="grid" />
      </QueryClientProvider>,
    );
    const input = screen.getByRole("searchbox");
    await userEvent.type(input, "Kyiv");
    const loader = await screen.findByTestId("list-skeleton");
    expect(loader).toBeInTheDocument();
  });

  it("does not submit if no city selected", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SearchForm display="grid" />
      </QueryClientProvider>,
    );
    const selectBtn = screen.getByText("select city");
    await userEvent.click(selectBtn);

    const submitBtn = screen.getByRole("button", { name: /search/i });
    await userEvent.click(submitBtn);
    expect(replaceMock).toHaveBeenCalled();
  });
});
