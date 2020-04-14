class DataSource {
  static globalReports() {
    return fetch(`https://covid19.mathdro.id/api/`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        }
      })
      .catch( () => {
        return Promise.reject(console.log('Data Failed to Load'));
      })
  }
  
  static searchCountry(keyword) {
    return fetch(`https://covid19.mathdro.id/api/countries/${keyword}/confirmed`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson) {
          if (responseJson[0].countryRegion) {
            return Promise.resolve(responseJson[0]);
          }
        }
      })
      .catch( () => {
        return Promise.reject(`${keyword} not found, please enter correctly`);
      })
  }
}

export default DataSource;