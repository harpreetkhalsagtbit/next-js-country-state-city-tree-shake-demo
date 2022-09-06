import { State } from 'country-state-city';
import Dropdown from './Commons/Dropdown'

const StateComponent = ({countryCode = 'IN'}) => {
    const data = State.getStatesOfCountry(countryCode).map(state => ({
        value: state.name,
        displayValue: `${state.name} - ${state.isoCode}`
    }))
	return <Dropdown options={data}></Dropdown>
}

export default StateComponent;