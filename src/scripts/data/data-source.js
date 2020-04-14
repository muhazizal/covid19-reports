class DataSource {
  static globalReports() {
    return fetch(`https://covid19.mathdro.id/api/`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson) {
          return Promise.resolve(responseJson);
        } else {
          return Promise.reject('gagal');
        }
      })
      .catch( () => {
        return Promise.reject('failed');
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
        return Promise.reject(`${keyword} not found, try again!`);
      })
  }
}

export default DataSource;