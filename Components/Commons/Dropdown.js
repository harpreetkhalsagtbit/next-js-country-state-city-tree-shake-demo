const Dropdown = ({options}) => {
	return <select>
		{
			options.map((option, index) => {
				return <option key={index} value={option.value}>{option.displayValue}</option>
			})
		}
	</select>
}

export default Dropdown;