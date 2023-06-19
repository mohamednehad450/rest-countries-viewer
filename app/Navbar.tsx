import clsx from "clsx";
import ThemeToggle from "./ThemeButton";
import Link from "next/link";

function Navbar() {
  return (
    <nav
      className={clsx(
        "w-full h-24",
        "shadow dark:shadow-none",
        "px-8 md:px-20",
        "sticky",
        "top-0",
        "z-50",
        "flex items-center justify-between",
        "bg-white dark:bg-dark-blue"
      )}
    >
      <Link href="/" className="font-extrabold text-lg sm:text-2xl ">
        Where in the world?
      </Link>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
