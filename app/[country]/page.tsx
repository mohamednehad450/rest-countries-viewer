import { fetchCountries, fetchCountry } from "@/components/api";
import CountryPage from "./CountryPage";

export async function generateStaticParams() {
  const countries = await fetchCountries();

  return countries.map((country) => ({
    country: country.alpha3Code,
  }));
}

export default async function Page({
  params,
}: {
  params: { country: string };
}) {
  const country = await fetchCountry(params.country);
  return <CountryPage country={country} />;
}
