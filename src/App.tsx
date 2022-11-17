import { CountryList } from './components/CountryList/CountryList';
import countriesApi from "./country-data.json";
import { transformCountry } from './mappers/TransformCountry';

export const App = () => {
  const countries = transformCountry(countriesApi)
  return (
    <div className="container">
      <h1>Countries list</h1>
      <CountryList country={countries} />
    </div>
  );
}
