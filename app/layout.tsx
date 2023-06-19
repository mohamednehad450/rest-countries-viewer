import clsx from "clsx";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Navbar from "./Navbar";
import QueryProvider from "@/components/QueryProvider";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "Where in the World?",
  description: "Countries Viewer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          nunito.className,
          "bg-very-light-gray dark:bg-very-dark-blue1",
          "text-very-dark-blue2 dark:text-white",
          "text-very-dark-blue"
        )}
      >
        <QueryProvider>
          <Navbar />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
