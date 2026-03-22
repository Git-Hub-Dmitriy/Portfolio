import { describe, it, expect, beforeEach } from "vitest";
import storeParams from "./storeParams";

let store = storeParams.getState();

describe("switch settings", () => {
  beforeEach(() => {
    store.resetParams();
  });

  it("should change all settings", () => {
    store.setParamsStore({
      temperature: "fahrenheit",
      speed: "mph",
      precipitation: "inch",
    });

    const updatedStore = storeParams.getState();
    expect(updatedStore.temperature).toBe("fahrenheit");
    expect(updatedStore.speed).toBe("mph");
    expect(updatedStore.precipitation).toBe("inch");
  });

  it("should change only the temperature", () => {
    store.setParamsStore({
      temperature: "fahrenheit",
      speed: null,
      precipitation: null,
    });

    const updatedStore = storeParams.getState();
    expect(updatedStore.temperature).toBe("fahrenheit");
    expect(updatedStore.speed).toBe(null);
    expect(updatedStore.precipitation).toBe(null);
  });

  it("should change only the speed", () => {
    store.setParamsStore({
      temperature: null,
      speed: "mph",
      precipitation: null,
    });

    const updatedStore = storeParams.getState();
    expect(updatedStore.temperature).toBe(null);
    expect(updatedStore.speed).toBe("mph");
    expect(updatedStore.precipitation).toBe(null);
  });

  it("should change only the precipitation", () => {
    store.setParamsStore({
      temperature: null,
      speed: null,
      precipitation: "inch",
    });

    const updatedStore = storeParams.getState();
    expect(updatedStore.temperature).toBe(null);
    expect(updatedStore.speed).toBe(null);
    expect(updatedStore.precipitation).toBe("inch");
  });
});
