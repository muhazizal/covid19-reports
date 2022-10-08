class ConvertValue {
	static convertValue(value) {
		const rounded = Math.round(value * 100) / 100
		let result = 0
		if (!isNaN(rounded)) {
			result = rounded
				.toString()
				.replace('.', ',')
				.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
		}
		return result
	}
}

export default ConvertValue
