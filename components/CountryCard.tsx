import { FC } from "react";
import clsx from "clsx";
import LabeledValue from "./LabeledValue";
import { Country } from "./api";

const formatNumber = (n: number): string => {
  const arr = String(n).split("");
  for (let i = arr.length - 4; i >= 0; i -= 3) {
    arr[i] = arr[i] + ",";
  }
  return arr.join("");
};

interface CountryCardProps {
  country: Country;
  onClick?: (c: Country) => void;
}

const CountryCard: FC<CountryCardProps> = ({ country, onClick }) => {
  return (
    <button
      onClick={() => onClick && onClick(country)}
      className={clsx(
        "w-64 h-80",
        "rounded-lg",
        "overflow-hidden",
        "shadow dark:shadow-none",
        "bg-white dark:bg-dark-blue",
        "flex flex-col",
        "text-start",
        "transition-all hover:shadow-2xl hover:dark:shadow-none hover:scale-110"
      )}
    >
      <img
        src={country.flags.png}
        width={256}
        height={160}
        alt={"Flag of " + country.name}
        loading="lazy"
      />
      <div className="px-6 pt-6">
        <div className="text-lg font-extrabold">{country.name}</div>
        <div className="flex flex-col pt-2 text-sm">
          <LabeledValue
            label="Population"
            value={formatNumber(country.population)}
          />
          <LabeledValue label="Region" value={country.region} />
          <LabeledValue label="Capital" value={country.capital} />
        </div>
      </div>
    </button>
  );
};

const Skeleton: FC = () => {
  return (
    <button
      className={clsx(
        "w-64 h-80",
        "rounded-lg",
        "overflow-hidden",
        "shadow dark:shadow-none",
        "bg-white dark:bg-dark-blue",
        "flex flex-col",
        "text-start",
        "transition-all hover:shadow-2xl hover:dark:shadow-none hover:scale-110"
      )}
    >
      <div className="h-40 w-full bg-gray-100 dark:bg-gray-700" />
      <div className="px-6 pt-6">
        <div className="flex flex-col pt-2 gap-1">
          <span className="bg-gray-100 dark:bg-gray-700 h-4 w-full" />
          <span className="bg-gray-100 dark:bg-gray-700 h-3 w-2/3 mt-4" />
          <span className="bg-gray-100 dark:bg-gray-700 h-3 w-2/3 my-2" />
          <span className="bg-gray-100 dark:bg-gray-700 h-3 w-2/3" />
        </div>
      </div>
    </button>
  );
};

export { Skeleton };
export default CountryCard;
