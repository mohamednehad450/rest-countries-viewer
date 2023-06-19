import { Metadata } from "next";
import { fetchCountries, fetchCountry } from "@/components/api";
import CountryPage from "./CountryPage";

export async function generateStaticParams() {
  const countries = await fetchCountries();

  return countries.map((country) => ({
    country: country.alpha3Code,
  }));
}

type Props = {
  params: { country: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.country;

  const country = await fetchCountry(id);

  return {
    title: country.name,
  };
}
export default async function Page({ params }: Props) {
  const country = await fetchCountry(params.country);
  return <CountryPage country={country} />;
}
