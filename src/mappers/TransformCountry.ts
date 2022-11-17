import { ICountry, ICountryAPI } from "../types";


export const transformCountry = (countries: ICountryAPI[]): ICountry[] => {
    return countries.map((country) => {
        return {
            name: country.name.common,
            area: country.area,
            population: country.population,
            flag: country.flags.svg,
            capital: country.capital[0],
            region: country.region,
        };
    });
};
