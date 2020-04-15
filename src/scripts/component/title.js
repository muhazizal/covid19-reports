import '../../assets/reports.svg';

class Title extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open'
    })
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const reportsImg = './dist/assets/reports.svg';

    this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
        .container { width: 90%; }

        .title-desc,
        .title-img {
          margin-top: 5rem;
        }

        .title-desc { margin: 5rem auto 0 auto; }
        .title-desc h1 { font-size: 3.2rem; }
        .title-desc p { margin: 1.5rem auto 0 auto; }
        img { width: 60%; }

        @media (min-width: 768px) {
          .title-desc { width: 80%; }
          img { max-width: 375px !important; }
        }

        @media (min-width: 992px) {
          .container { max-width: 960px; }

          .title-desc {
            margin: auto auto auto 0;
            text-align: left;
          }

          .title-desc h1,
          .title-desc p {
            width: 50%;
            margin: auto;
          }
          
          .title-desc p { margin-top: 1.5rem; }
        }
      </style>

      <section class="container">
        <div class="row">
          <div class="col-xs-12 col-lg-6 title-desc">
            <h1>Coronavirus Global Reports</h1>
            <p>
              Here is infected, death, or recovered patients report for coronavirus (COVID-19)
              that has been recorded from the whole world (Up to Date).
            </p>
          </div>
          
          <figure class="col-xs-12 col-lg-6 title-img">
            <img src="${reportsImg}" class="img-fluid" alt="Global Reports">
          </figure>
        </div>
      </section>
    `;
  }
}

customElements.define('title-app', Title);