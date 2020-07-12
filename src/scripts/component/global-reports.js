class GlobalReports extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	set reports(reports) {
		this._reports = reports;
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
    `;
	}

	renderSuccess() {
		this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
        .container { width: 90%; }

        .card {
          width: 12.5rem;
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
                <h2>Confirmed</h2>
                <p>${this._reports.confirmed.value}</p>
              </div>
            </div>
          </div>

          <div class="col-xs-4">
            <div class="card bg-success text-white">
              <div class="card-body">
                <h2>Recovered</h2>
                <p>${this._reports.recovered.value}</p>
              </div>
            </div>
          </div>

          <div class="col-xs-4">
            <div class="card bg-danger text-white">
              <div class="card-body">
                <h2>Deaths</h2>
                <p>${this._reports.deaths.value}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
	}
}

customElements.define('global-reports-app', GlobalReports);
