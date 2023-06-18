import clsx from "clsx";
import ThemeToggle from "./ThemeButton";

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
      <a href="/" className="font-extrabold text-lg sm:text-2xl ">
        Where in the world?
      </a>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
