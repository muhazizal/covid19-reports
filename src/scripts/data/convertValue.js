class ConvertValue {
  // Convert value with dot
  static convertValue(value, idx, rem, str) {
    let result = ''

    // If value length is 4/5/6
    if (idx === 4 || idx === 5 || idx === 6) {
      result = value.slice(0, idx - 3) + str + value.slice(idx - 3 + Math.abs(rem))
    }

    // If value length is 7/8/9
    if (idx === 7 || idx === 8 || idx === 9) {
      let start = 1

      if (idx === 8) {
        start = 2
      }
      if (idx === 9) {
        start = 3
      }

      result = value.slice(0, idx - 6) + str + value.slice(start, idx - 3) + str + value.slice(idx - 3 + Math.abs(rem))
    }

    return result
  }
}

export default ConvertValue
