"use client";
import classNames from "classnames";
import styles from "./SearchForm.module.css";
import IconSearch from "@icons/iconSearch.svg";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import getCities from "@services/external/getCities";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { DescriptionApiCityObject } from "@interfaces/descriptionApi";
import ListSkeleton from "@components/SearchForm/ListSkeleton/ListSkeleton.client";
const ListSearch = dynamic(
  () => import("@components/SearchForm/ListSearch/ListSearch.client"),
);

interface PropsSearch {
  display: string;
}

export default function SearchForm(props: PropsSearch) {
  const [search, setSearch] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [debounce, setDebounce] = useState<string>(search);
  const [selected, setSelected] = useState<DescriptionApiCityObject | null>(
    null,
  );
  const searchParams = new URLSearchParams(useSearchParams().toString());
  const router = useRouter();
  const pathname = usePathname();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["search", debounce],
    queryFn: () => getCities(debounce),
    staleTime: 60000,
    enabled: debounce.length > 2,
    placeholderData: (previousData) => previousData,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  function handleSubmit() {
    if (!selected) {
      return;
    } else {
      searchParams.set("lat", selected.latitude);
      searchParams.set("long", selected.longitude);
      searchParams.set("country", selected.country);
      searchParams.set("city", selected.name);
      setSelected(null);
      setSearch("");
      router.replace(`${pathname}?${searchParams.toString()}`);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      style={{ display: props.display }}
      className={classNames("gridCenter", styles.search)}
    >
      <div className={styles.search__innerInput}>
        <input
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          autoComplete="off"
          className={
            search.length === 0
              ? styles.search__input
              : search.length > 0 && search.length < 3
                ? classNames(styles.search__input, styles.search__input_red)
                : styles.search__input
          }
          placeholder="Search for a place..."
          type="search"
          name="search"
          value={search}
          minLength={3}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconSearch className={styles.search__icon} />
        {isLoading ? (
          <ListSkeleton />
        ) : (
          <ListSearch
            isFocus={isFocus}
            isLoading={isLoading}
            isError={isError}
            error={error}
            data={data?.results}
            setSearch={setSearch}
            search={search}
            setSelected={setSelected}
          />
        )}
      </div>
      <button
        onClick={() => handleSubmit()}
        className={classNames("gridCenter", styles.search__button)}
        type="button"
      >
        Search
      </button>
    </form>
  );
}
