import { fetchCountries } from "@/components/api";
import CountriesList from "./CountriesList";

export default async function Home() {
  const countries = await fetchCountries();

  return <CountriesList countries={countries} />;
}
