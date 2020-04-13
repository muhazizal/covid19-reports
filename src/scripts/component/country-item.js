import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class CountryItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set country(country) {
    this._country = country;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
      </style>

      <tbody>
        <tr>
          <td>${this._country.countryRegion}</td>
          <td>${this._country.confirmed}</td>
          <td>${this._country.recovered}</td>
          <td>${this._country.deaths}</td>
        </tr>
      </tbody>
    `
  }
}

customElements.define('country-item', CountryItem);