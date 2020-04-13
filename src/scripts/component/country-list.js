import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './country-item';

class CountryList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set countries(countries) {
    this._countries = countries;
    this.renderSuccess();
  }

  renderError(message) {
    this.shadowDOM.innerHTML += `
      <div class="alert alert-danger" role="alert">
        <strong>${message}</strong>
      </div>
    `
  }

  renderSuccess() {
    this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
      </style>

      <thead>
        <tr>
          <th scope="col">Country</th>
          <th scope="col">Confirmed</th>
          <th scope="col">Recovered</th>
          <th scope="col">Deaths</th>
        </tr>
      </thead>
    `
    this._countries.forEach((country) => {
      const countryItemElement = document.createElement('country-item');
      countryItemElement.country = country;
      this.shadowDOM.appendChild(countryItemElement);
    })
  }
}

customElements.define('country-list', CountryList);