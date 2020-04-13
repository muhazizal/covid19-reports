class DataSource {
  static searchCountry(keyword) {
    return fetch(`https://covid19.mathdro.id/api/countries/${keyword}/confirmed`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson) {
          return Promise.resolve(responseJson[0]);
        }
        return Promise.reject(`${keyword} not found, try again!`);
      })
  }
}

export default DataSource;