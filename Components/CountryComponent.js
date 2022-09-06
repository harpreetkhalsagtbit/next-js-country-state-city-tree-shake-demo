import { Country } from 'country-state-city';
import Dropdown from './Commons/Dropdown'

const CountryComponent = () => {
    const data = Country.getAllCountries().map(country => ({
        value: country.name,
        displayValue: `${country.name} - ${country.isoCode}`
    }))
	return <Dropdown options={data}></Dropdown>
}

export default CountryComponent;