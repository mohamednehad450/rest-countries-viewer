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
  borders: string[];
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

const fetchCountries = (region?: string): Promise<Country[]> =>
  fetch(
    region
      ? `https://restcountries.com/v2/region/${region}?fields=name,population,capital,region,flags,alpha3Code`
      : "https://restcountries.com/v2/all?fields=name,population,capital,region,flags,alpha3Code"
  ).then((res) => res.json());

const fetchCountry = (code: string): Promise<FullCountry> =>
  fetch(
    `https://restcountries.com/v2/alpha/${code}?fields=name,population,capital,region,flags,alpha3Code,nativeName,topLevelDomain,currencies,languages,subregion,borders`
  ).then((res) => res.json());

export { fetchCountries, fetchCountry };
export type { Country, FullCountry };
