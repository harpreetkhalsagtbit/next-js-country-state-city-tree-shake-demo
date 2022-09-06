import { Country, City } from 'country-state-city';
import Dropdown from './Commons/Dropdown'

const CountryAndCityComponent = ({ countryCode = 'IN', cityCode = 'TG' }) => {
    const cityData = City.getCitiesOfState(countryCode, cityCode).map(city => ({
        value: city.name,
        displayValue: city.name
    }))

    const countryData = Country.getAllCountries().map(city => ({
        value: city.name,
        displayValue: city.name
    }))

    return <>
        <p>All Countries</p>
        <Dropdown options={countryData}></Dropdown>
        <p>All Cities of a State - Telangana(India)</p>
        <Dropdown options={cityData}></Dropdown>
    </>
}

export default CountryAndCityComponent;