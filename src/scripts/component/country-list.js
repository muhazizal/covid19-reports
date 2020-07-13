import './country-item';

class CountryList extends HTMLElement {
	constructor() {
		super();
		// Attach shadow dom
		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	// Set countries data
	set countries(countries) {
		this._countries = countries;
		this.renderSuccess();
	}

	// Render message on error
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
    `;
	}

	// Render country list
	renderSuccess() {
		this.shadowDOM.innerHTML = ``;
		const countryItemElement = document.createElement('country-item');
		countryItemElement.country = this._countries;
		this.shadowDOM.appendChild(countryItemElement);
	}
}

customElements.define('country-list', CountryList);
