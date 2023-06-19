"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FC } from "react";

const CountryButton: FC<{ country: { alpha3Code: string; name: string } }> = ({
  country,
}) => {
  const router = useRouter();
  return (
    <button
      key={country.alpha3Code}
      onClick={() => router.push(country.alpha3Code)}
      className={clsx(
        "bg-white dark:bg-dark-blue",
        "h-10 w-28 md:w-32 px-3",
        "rounded shadow dark:shadow-none",
        "font-extralight",
        "whitespace-nowrap overflow-hidden overflow-ellipsis"
      )}
    >
      {country.name}
    </button>
  );
};

export default CountryButton;
