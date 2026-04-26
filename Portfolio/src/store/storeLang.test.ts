import { it, describe, expect } from "vitest";
import storeSelectedLang from "./storeSelectLang";

const store = storeSelectedLang.getState();

describe("Change language", () => {
  it("should change language", () => {
    store.setLanguage("EN");
  });
  const updatedStore = storeSelectedLang.getState().language;
  expect(updatedStore).toBe("EN");
});
