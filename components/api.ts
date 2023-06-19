type Country = {
  name: string;
  population: number;
  capital?: string;
  region: string;
  alpha3Code: string;
  flags: {
    svg: string;
    png: string;
  };
};

type FullCountry = {
  name: string;
  nativeName: string;
  topLevelDomain: string[];
  population: number;
  capital?: string;
  region: string;
  subregion: string;
  alpha3Code: string;
  borders: { alpha3Code: string; name: string }[];
  currencies: { code: string; name: string; symbol: string }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  flags: {
    svg: string;
    png: string;
  };
};

const fetchCountries = (region?: string, name?: string): Promise<Country[]> =>
  fetch(
    region
      ? `https://restcountries.com/v2/region/${region}?fields=name,population,capital,region,flags,alpha3Code`
      : "https://restcountries.com/v2/all?fields=name,population,capital,region,flags,alpha3Code"
  ).then((res) => res.json());

const fetchCountry = async (code: string): Promise<FullCountry> => {
  const country = await fetch(
    `https://restcountries.com/v2/alpha/${code}?fields=name,population,capital,region,flags,alpha3Code,nativeName,topLevelDomain,currencies,languages,subregion,borders`
  ).then((res) => res.json());
  if (country.borders.length) {
    country.borders = await fetch(
      `https://restcountries.com/v2/alpha?codes=${country.borders.join(
        ","
      )}&fields=name,alpha3Code`
    ).then((res) => res.json());
  }

  return country as FullCountry;
};

export { fetchCountries, fetchCountry };
export type { Country, FullCountry };
