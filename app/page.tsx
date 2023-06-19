"use client";
import CountryCard, { Skeleton } from "@/components/CountryCard";
import RegionMenu from "@/components/RegionMenu";
import SearchBar from "@/components/SearchBar";
import { fetchCountries } from "@/components/api";
import clsx from "clsx";
import { useState } from "react";
import { useQuery } from "react-query";

export default function Home() {
  const [query, setQuery] = useState<string>();
  const [filter, setFilter] = useState<string>();

  const { data, isLoading, isError, refetch } = useQuery(
    ["countries", filter],
    () => fetchCountries(filter),
    { keepPreviousData: true }
  );

  return (
    <main className={clsx("p-4 md:px-20 md:py-8", "max-w-[1440px]", "mx-auto")}>
      <section
        className={clsx(
          "flex flex-col md:flex-row",
          "items-start md:items-center justify-between",
          "my-2 md:my-4 gap-6"
        )}
      >
        <SearchBar onSearch={setQuery} />
        <RegionMenu value={filter} onChange={setFilter} />
      </section>
      {isLoading ? (
        <section
          className={clsx(
            "py-8 md:px-0",
            "gap-6 md:gap-20",
            "grid place-items-center",
            "xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1"
          )}
        >
          {[...new Array(8)].map((_, i) => (
            <Skeleton key={i} />
          ))}
        </section>
      ) : isError ? (
        <section
          className={clsx(
            "py-8 md:px-0",
            "gap-6 md:gap-20",
            "grid place-items-center"
          )}
        >
          <button
            onClick={() => refetch()}
            className="bg-white dark:bg-dark-blue h-10 w-32 rounded shadow dark:shadow-none font-extralight"
          >
            Try again
          </button>
        </section>
      ) : (
        <section
          className={clsx(
            "py-8 md:px-0",
            "gap-6 md:gap-20",
            "grid place-items-center",
            "xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1"
          )}
        >
          {data
            ?.filter(
              ({ name }) =>
                !query ||
                name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
            )
            .map((country) => {
              return <CountryCard key={country.name} country={country} />;
            })}
        </section>
      )}
    </main>
  );
}
