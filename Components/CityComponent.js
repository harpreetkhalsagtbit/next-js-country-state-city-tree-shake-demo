import { City } from 'country-state-city';
import Dropdown from './Commons/Dropdown'

const CityComponent = ({ countryCode = 'IN', cityCode = 'TG' }) => {
    const data = City.getCitiesOfState(countryCode, cityCode).map(city => ({
        value: city.name,
        displayValue: city.name
    }))
    return <Dropdown options={data}></Dropdown>
}

export default CityComponent;