import { CountryItem } from "../CountryItem/CountryItem";
import { Badge } from "../Badge/Badge";
import { ICountry } from "../../types";

interface IProps {
    country: ICountry[],
}

export const CountryList = ({ country }: IProps) => {
    return (
        <ul className="list-group">
            {country.map((item) => {
                return <CountryItem country={item} />
            })}
        </ul>
    )
}
