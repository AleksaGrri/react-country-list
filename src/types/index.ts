export interface ICountry {
    flag: string;
    name: string;
    capital: string;
    population: number;
    area: number;
    region: string;
}

export interface ICountryAPI {
    flags: ICountryFlagAPI;
    name: ICountryNameAPI;
    capital: string[];
    region: string;
    area: number;
    population: number;
}

export interface ICountryFlagAPI {
    png: string;
    svg: string;
}

export interface ICountryNameAPI {
    common: string;
    official: string;
    nativeName?: ICountryNativeNameAPI;
}

export interface ICountryNativeNameAPI {
    spa?: ICountryNativeNameSpaAPI;
}

export interface ICountryNativeNameSpaAPI {
    official: string;
    common: string;
}

export enum Color {
    Primary = "primary",
    Secondary = "secondary",
    Success = "success",
    Danger = "danger",
    Warning = "warning",
    Info = "info",
    Light = "light",
    Dark = "dark",
}

export type BadgeLabel = "area" | "population";