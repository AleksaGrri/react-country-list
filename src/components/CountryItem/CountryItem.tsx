import { Color, ICountry } from "../../types";
import { Badge } from "../Badge/Badge";

interface IProps {
    country: ICountry,
}

export const CountryItem = ({ country }: IProps) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <img width={100} src={country.flag} alt="flag" />
            </div>
            <div>
                {country.name}
            </div>
            <div>
                {country.region}
            </div>
            <div>
                {country.capital}
            </div>
            <div>
                <Badge color={Color.Primary} badgelabel='area' value={country.area} />
            </div>
            <div>
                <Badge color={Color.Danger} badgelabel='population' value={country.population} />
            </div>
        </li>
    )
}
