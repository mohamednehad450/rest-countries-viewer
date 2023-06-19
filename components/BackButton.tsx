"use client";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FC } from "react";

const BackButton: FC = () => {
  const router = useRouter();
  return (
    <button
      onClick={router.back}
      className={clsx(
        "bg-white dark:bg-dark-blue",
        "h-10 w-32 px-6",
        "rounded shadow dark:shadow-none",
        "font-extralight",
        "flex items-center gap-3"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l14 0" />
        <path d="M5 12l6 6" />
        <path d="M5 12l6 -6" />
      </svg>
      Back
    </button>
  );
};

export default BackButton;
