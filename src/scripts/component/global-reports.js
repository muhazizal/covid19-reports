import ConvertValue from '../data/convertValue.js'

class GlobalReports extends HTMLElement {
	constructor() {
		super()
		// Attach shadow dom
		this.shadowDOM = this.attachShadow({
			mode: 'open',
		})
	}

	// Set reports data
	set reports(reports) {
		this._reports = reports
		this.renderSuccess()
	}

	// Render error message on error
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

	// Render component if success
	renderSuccess() {
		// Insert shadowDOM HTML
		this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
        .container { width: 90%; }

        .card {
          width: 16rem;
          margin: 1rem;
          font-size: 2rem;
        }
        
        p { letter-spacing: 1px; }

        @media (min-width: 576px) {
          .card { margin: 1rem 1.5rem; }
        }

        @media (min-width: 768px) {
          .card {
            width: 17.5rem;
            margin: 1rem 2rem;
          }
        }

        @media (min-width: 992px) {
          .card { 
            width: 19.65rem;
            margin: 1rem 2.5rem; 
          }
        }
      </style>

      <section class="container my-5">
        <div class="row justify-content-center">
          <div class="col-xs-4">
            <div class="card bg-warning text-white">
              <div class="card-body">
                <h2>Confirmed &#128532</h2>
                <p>${ConvertValue.convertValue(
									this._reports.confirmed.value
								)}</p>
              </div>
            </div>
          </div>

          <div class="col-xs-4">
            <div class="card bg-success text-white">
              <div class="card-body">
                <h2>Recovered &#128522</h2>
                <p>${ConvertValue.convertValue(
									this._reports.recovered.value
								)}</p>
              </div>
            </div>
          </div>

          <div class="col-xs-4">
            <div class="card bg-danger text-white">
              <div class="card-body">
                <h2>Deaths &#128549</h2>
                <p>${ConvertValue.convertValue(this._reports.deaths.value)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
	}
}

customElements.define('global-reports-app', GlobalReports)
