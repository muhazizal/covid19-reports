import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/reports.svg';

class Title extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const reportsImg = './dist/src/assets/reports.svg';

    this.shadowDOM.innerHTML = `
    <style>
      ${bootstrap}

      .title-desc,
      .title-img {
        margin-top: 3rem;
      }

      .title-desc h1 { font-size: 3.2rem; }

      img {
        width: 50%;
        height: auto;
      }
    </style>

    <section class="container">
      <row>
        <div class="col-lg-6 title-desc">
          <h1>Coronavirus Global Reports</h1>
          <p>
            Here is infected, death, or recovered patients report for coronavirus (COVID-19)
            that has been recorded from the whole world.
          </p>
        </div>

        <figure class="col-lg-6 title-img">
          <img src="${reportsImg}" alt="Global Reports">
        </figure>
      </row>
    </section>
    `
  }
}

customElements.define('title-app', Title);