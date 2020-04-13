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

      <section class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">${this._country.countryRegion}</div>
              <div class="card-body">
                <ul class="list-group list-group-flush text-left">
                  <li class="list-group-item">Positif     : ${this._country.confirmed}</li>
                  <li class="list-group-item">Recovered   : ${this._country.recovered}</li>
                  <li class="list-group-item">Deaths      : ${this._country.deaths}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  }
}

customElements.define('country-item', CountryItem);