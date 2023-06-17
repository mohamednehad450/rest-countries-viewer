"use client";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <button
      className="font-semibold flex items-center gap-2"
      onClick={() => setDark((d) => !d)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-moon dark:stroke-none stroke-very-dark-blue1 dark:fill-white"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="inherit"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
      </svg>
      Dark Mode
    </button>
  );
}

export default ThemeToggle;
