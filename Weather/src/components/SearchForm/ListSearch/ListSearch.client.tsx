"use client";
import * as styles from "./ListSearch.module.css";
import { DescriptionApiCityObject } from "@interfaces/descriptionApi";
import classNames from "classnames";

interface PropsListSearch {
  data: DescriptionApiCityObject[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  isFocus: boolean;
  search: string;
  setSearch: (str: string) => void;
  setSelected: (city: DescriptionApiCityObject) => void;
}

export default function ListSearch(props: PropsListSearch) {
  const visibleList =
    props.isFocus && props?.data?.length && props.search.length > 2;

  return (
    <ul
      className={classNames(
        styles.listSearch,
        visibleList && styles.listSearch_active,
      )}
    >
      {props.data?.map((item) => {
        return (
          <li
            onPointerDown={() => {
              props.setSearch(item.name);
              props.setSelected(item);
            }}
            key={item.id}
            className={styles.listSearch__li}
          >
            {item.name}, {item.country}
          </li>
        );
      }) ?? null}
    </ul>
  );
}
