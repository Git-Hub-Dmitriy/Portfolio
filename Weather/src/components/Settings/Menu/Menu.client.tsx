"use client";
import styles from "./Menu.module.css";
import storeParams from "@store/storeParams";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import classNames from "classnames";
import Metric from "@components/Settings/Menu/Metric/Metric.client";

interface PropsMenu {
  display: boolean;
}

export default function Menu(props: PropsMenu) {
  const router = useRouter();
  const pathname = usePathname();
  const { resetParams, setParamsStore, temperature, speed, precipitation } =
    storeParams();
  const params: URLSearchParams = new URLSearchParams(
    useSearchParams().toString(),
  );

  function handleReset() {
    if (params) {
      resetParams();
      params.delete("temp");
      params.delete("speed");
      params.delete("precipitation");
      router.replace(`${pathname}?${params.toString()}`);
    }
    return;
  }

  function handleSetParams(
    temp: null | string,
    speed: null | string,
    precip: null | string,
  ) {
    const updates: Record<string, string | null> = {
      temp,
      speed,
      precipitation: precip,
    };
    Object.entries(updates).forEach(([key, value]) => {
      if (value !== null) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    setParamsStore({
      temperature: temp,
      speed: speed,
      precipitation: precip,
    });
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <nav
      className={classNames(styles.menu, props.display && styles.menu_active)}
    >
      <button
        onMouseDown={(e) => {
          e.preventDefault();
          handleReset();
        }}
        className={styles.menu__button}
      >
        Switch to Imperial
      </button>
      <Metric
        title={"Temperature"}
        subtitle={{ one: "Celsius", two: "Fahrenheit" }}
        paramTemp={{ one: null, two: "fahrenheit" }}
        paramSpeed={{
          one: params.get("speed"),
          two: params.get("speed"),
        }}
        paramPrecip={{
          one: params.get("precipitation"),
          two: params.get("precipitation"),
        }}
        state={temperature}
        handleSetParams={handleSetParams}
        metric={{ one: "(°C)", two: "(°F)" }}
      />
      <div className={styles.menu__line}></div>
      <Metric
        title={"Wind Speed"}
        subtitle={{ one: "km/h", two: "mph" }}
        paramTemp={{
          one: params.get("temp"),
          two: params.get("temp"),
        }}
        paramSpeed={{
          one: null,
          two: "mph",
        }}
        paramPrecip={{
          one: params.get("precipitation"),
          two: params.get("precipitation"),
        }}
        state={speed}
        handleSetParams={handleSetParams}
        metric={{ one: "", two: "" }}
      />
      <div className={styles.menu__line}></div>
      <Metric
        title={"Precipitation"}
        subtitle={{ one: "Millimeters", two: "Inches" }}
        paramTemp={{
          one: params.get("temp"),
          two: params.get("temp"),
        }}
        paramSpeed={{
          one: params.get("speed"),
          two: params.get("speed"),
        }}
        paramPrecip={{
          one: null,
          two: "inch",
        }}
        state={precipitation}
        handleSetParams={handleSetParams}
        metric={{ one: "(mm)", two: "(in)" }}
      />
    </nav>
  );
}
