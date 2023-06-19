"use client";
import CountryCard from "@/components/CountryCard";
import RegionMenu from "@/components/RegionMenu";
import SearchBar from "@/components/SearchBar";
import { Country } from "@/components/api";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CountriesList({ countries }: { countries: Country[] }) {
  const [query, setQuery] = useState<string>();
  const [filter, setFilter] = useState<string>();

  const router = useRouter();

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
      <section
        className={clsx(
          "py-8 md:px-0",
          "gap-6 md:gap-20",
          "grid place-items-center",
          "xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1"
        )}
      >
        {countries
          ?.filter(
            ({ name, region }) =>
              (!filter || region.includes(filter)) &&
              (!query ||
                name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name}
                country={country}
                onClick={({ alpha3Code }) => router.push(alpha3Code)}
              />
            );
          })}
      </section>
    </main>
  );
}
