import { Menu, Transition } from "@headlessui/react";
import clsx from "clsx";
import { FC, Fragment } from "react";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"] as const;

interface RegionMenuProps {
  value?: string;
  onChange: (s?: string) => void;
}
const RegionMenu: FC<RegionMenuProps> = ({ value, onChange }) => {
  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button
        className={clsx(
          "flex items-center justify-between",
          "h-14 w-52",
          "px-4 md:pl-6",
          "gap-6",
          "rounded-lg",
          "shadow dark:shadow-none",
          "bg-white dark:bg-dark-blue",
          "font-extralight"
        )}
      >
        {value ?? "Filter by Region"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-very-dark-blue2 dark:stroke-white"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          stroke-width="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 9l6 6l6 -6" />
        </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            "absolute right-0 z-10",
            "mt-1 w-52 p-6",
            "origin-top-right",
            "rounded-lg",
            "flex flex-col items-stretch",
            "gap-4",
            "text-left",
            "bg-white dark:bg-dark-blue",
            "shadow dark:shadow-none",
            "focus:outline-none"
          )}
        >
          {regions.map((region) => (
            <Menu.Item key={region}>
              <button
                onClick={() => onChange(value === region ? undefined : region)}
                className={clsx("text-left", value === region && "opacity-50")}
              >
                {region}
              </button>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default RegionMenu;
