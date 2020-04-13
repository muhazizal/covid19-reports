import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class reportID extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.getData();
  }

  getData() {
    fetch(`https://covid19.mathdro.id/api/countries/Indonesia/confirmed`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson) {
          for (let i = 0; i < responseJson.length; i++) {
            let data = responseJson[i];
            this.renderSuccess(data);
          }
        }
      })
  }

  renderSuccess(data) {
    this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
        .container {
          width: 90%;
          margin-top: 5rem;
        }
      </style>

      <section class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">${data.countryRegion}</div>
              <div class="card-body">
                <ul class="list-group list-group-flush text-left">
                  <li class="list-group-item">Positif     : ${data.confirmed}</li>
                  <li class="list-group-item">Recovered   : ${data.recovered}</li>
                  <li class="list-group-item">Deaths      : ${data.deaths}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  }

  renderFailed() {
    this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
      </style>

      <div class="alert alert-danger" role="alert">
        <strong>Data Failed to Reload</strong>
      </div>
    `
  }
}

customElements.define('indonesia-app', reportID);