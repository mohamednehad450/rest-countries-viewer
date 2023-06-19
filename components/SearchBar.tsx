import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import { useDebouncedValue } from "./hooks";

interface SearchBarProps {
  onSearch: (s: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebouncedValue(search, 200);

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch, onSearch]);

  return (
    <span
      className={clsx(
        "h-14 w-full max-w-md",
        "px-4 md:px-8",
        "rounded-lg",
        "shadow dark:shadow-none",
        "flex items-center",
        "gap-3 md:gap-6",
        "bg-white dark:bg-dark-blue",
        "font-extralight"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-dark-gray dark:stroke-white"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={clsx(
          "outline-none",
          "bg-inherit",
          "placeholder:dark:text-white",
          "flex-1"
        )}
        type="text"
        placeholder="Search for a country..."
      />
    </span>
  );
};

export default SearchBar;
