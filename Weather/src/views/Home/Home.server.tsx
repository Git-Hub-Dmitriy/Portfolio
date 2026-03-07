import { Metadata } from "next";
import styles from "./Home.module.css";
import { ParamsRequest } from "@interfaces/paramsRequest";
import Header from "@components/Header/Header.server";
import { Suspense } from "react";
import classNames from "classnames";
import MainCardSection from "@views/Home/MainCardSection/MainCardSection";
import SkeletonMainCard from "@views/Home/MainCardSection/SkeletonMainCard/SkeletonMainCard";
import DetailsSection from "@views/Home/DetailsSection/DetailsSection.server";
import SkeletonDetails from "@views/Home/DetailsSection/SkeletonDetails/SkeletonDetails";
import DailySection from "@views/Home/DailySection/DailySection.server";
import SkeletonDaily from "@views/Home/DailySection/SkeletonDaily/SkeletonDaily";
import HourlySection from "@views/Home/HourlySection/HourlySection.server";
import SkeletonHourly from "@views/Home/HourlySection/SkeletonHourly/SkeletonHourly";

export const metadata: Metadata = {
  title: "Weather",
  description: "Weather app",
  keywords: ["weather", "my app"],
};
interface PropsHome {
  searchParams: Promise<Partial<ParamsRequest>>;
}

export default async function Home(props: PropsHome) {
  const params = await props.searchParams;
  const defaultParams: ParamsRequest = {
    lat: params?.lat ?? "50.45",
    long: params?.long ?? "30.52",
    temp: params?.temp ?? "celsius",
    speed: params?.speed ?? "kmh",
    precipitation: params?.precipitation ?? "mm",
    country: params?.country ?? "Ukraine",
    city: params?.city ?? "Kyiv",
  };

  return (
    <main className={classNames("gridCenter", styles.home)}>
      <Header displaySearch="grid" displayTitle="block" />
      <div className={styles.home__wrapper_grid}>
        <div className={styles.home__column_one}>
          <Suspense fallback={<SkeletonMainCard />}>
            <MainCardSection settings={defaultParams} />
          </Suspense>
          <Suspense fallback={<SkeletonDetails />}>
            <DetailsSection settings={defaultParams} />
          </Suspense>
          <Suspense fallback={<SkeletonDaily />}>
            <DailySection settings={defaultParams} />
          </Suspense>
        </div>
        <div className={styles.home__column_two}>
          <Suspense fallback={<SkeletonHourly />}>
            <HourlySection settings={defaultParams} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
