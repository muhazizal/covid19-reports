import ConvertValue from '../data/convertValue.js'

class CountryItem extends HTMLElement {
	constructor() {
		super()
		// Attach shadow dom
		this.shadowDOM = this.attachShadow({
			mode: 'open',
		})
	}

	// Set country data
	set country(country) {
		this._country = country
		this.render()
	}

	render() {
		// Insert shadowDOM HTML
		this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
        .container {
          width: 90%;
          margin-bottom: 5rem;
        }

        .card { border: 1px solid lightgrey; }

        .card-header {
          background-color: #EAE6FF;
          font-weight: 600;
          font-size: 2rem;
        }

        .list-group-item {
          margin: 1rem;
          padding: 1rem;
          letter-spacing: 1px;
        }

        @media (max-width: 430px) {
          .list-group-horizontal {
            flex-direction: column;
          }
        }

        @media (min-width: 768px) {
          .list-group-item { margin: 1rem 1.5rem; }
        }

        @media (min-width: 992px) {
          .container {
            max-width: 720px;
            margin: 0 auto 5rem auto;;
          }

          .list-group-item { margin: 1rem 2rem; }
        }
      </style>

      <section class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card ">
              <div class="card-header">${this._country.countryRegion}</div>
              <div class="card-body">
                <ul class="list-group list-group-horizontal text-center text-white justify-content-center">
                  <li class="list-group-item bg-warning">Confirmed ${ConvertValue.convertValue(
										this._country.confirmed
									)}</li>
                  <li class="list-group-item bg-success">Recovered ${ConvertValue.convertValue(
										this._country.recovered
									)}</li>
                  <li class="list-group-item bg-danger">Deaths ${ConvertValue.convertValue(
										this._country.deaths
									)}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
	}
}

customElements.define('country-item', CountryItem)
