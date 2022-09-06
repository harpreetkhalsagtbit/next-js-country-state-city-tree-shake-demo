import { Country, State } from 'country-state-city';
import Dropdown from './Commons/Dropdown'

const CountryAndStateComponent = ({ countryCode = 'IN' }) => {
    const countryData = Country.getAllCountries().map(city => ({
        value: city.name,
        displayValue: city.name
    }))

    const stateData = State.getStatesOfCountry(countryCode).map(state => ({
        value: state.name,
        displayValue: state.name
    }))

    return <>
        <p>All Countries</p>
        <Dropdown options={countryData}></Dropdown>
        <p>All States of - India</p>
        <Dropdown options={stateData}></Dropdown>
    </>
}

export default CountryAndStateComponent;
