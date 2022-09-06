import { State, City } from 'country-state-city';
import Dropdown from './Commons/Dropdown'

const StateAndCityComponent = ({ countryCode = 'IN', cityCode = 'TG' }) => {
    const stateData = State.getStatesOfCountry(countryCode).map(state => ({
        value: state.name,
        displayValue: state.name
    }))

    const cityData = City.getCitiesOfState(countryCode, cityCode).map(city => ({
        value: city.name,
        displayValue: city.name
    }))

    return <>
        <p>All States of - India</p>
        <Dropdown options={stateData}></Dropdown>
        <p>All Cities of Telangana(IN)</p>
        <Dropdown options={cityData}></Dropdown>
    </>
}

export default StateAndCityComponent;
