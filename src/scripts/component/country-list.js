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
    this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
      </style>
      <div class="container">
        <div class="alert alert-danger" role="alert">
          <strong>${message}</strong>
        </div>
      </div>
    `
  }

  renderSuccess() {
    this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
      </style>
    `
    const countryItemElement = document.createElement('country-item');
    countryItemElement.country = this._countries;
    this.shadowDOM.appendChild(countryItemElement);
  }
}

customElements.define('country-list', CountryList);