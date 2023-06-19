import BackButton from "@/components/BackButton";
import CountryButton from "@/components/CountryButton";
import LabeledValue from "@/components/LabeledValue";
import { FullCountry } from "@/components/api";
import { formatNumber } from "@/components/utils";
import clsx from "clsx";
import { FC } from "react";

const CountryPage: FC<{ country: FullCountry }> = ({ country }) => {
  return (
    <main
      className={clsx(
        "p-8 md:p-20",
        "max-w-[1440px]",
        "md:mx-auto",
        "flex flex-col md:gap-20"
      )}
    >
      <BackButton />
      <section
        className={clsx(
          "flex flex-col md:items-center xl:flex-row",
          "py-8 w-full md:h-[400px]"
        )}
      >
        <div className="xl:w-1/2 max-w-2xl">
          <img src={country?.flags.svg} className="w-[560px]" />
        </div>
        <div className="xl:w-1/2 max-w-2xl flex flex-col">
          <h1 className="text-4xl font-extrabold py-10 md:px-10">
            {country?.name}
          </h1>
          <div className="md:pl-10 flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
            <div className="flex flex-col gap-4">
              <LabeledValue label="Native Name" value={country?.nativeName} />
              <LabeledValue
                label="Population"
                value={country && formatNumber(country?.population)}
              />
              <LabeledValue label="Region" value={country?.region} />
              <LabeledValue label="Sub Region" value={country?.subregion} />
              <LabeledValue label="Capital" value={country?.capital} />
            </div>
            <div className="flex flex-col gap-4">
              <LabeledValue
                label="Top Level Domain"
                value={country?.topLevelDomain.join(", ")}
              />
              <LabeledValue
                label="Currencies"
                value={country?.currencies.map((c) => c.name).join(", ")}
              />
              <LabeledValue
                label="Languages"
                value={country?.languages.map((l) => l.name).join(", ")}
              />
            </div>
          </div>
          <div className="mt-auto p-10 flex flex-col md:flex-row items-center gap-3">
            {country?.borders.length ? (
              <>
                <span className="font-semibold">Border Countries: </span>
                <div className="flex gap-2">
                  {country?.borders.slice(0, 3).map((border) => (
                    <CountryButton key={border.alpha3Code} country={border} />
                  ))}
                </div>
              </>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CountryPage;
