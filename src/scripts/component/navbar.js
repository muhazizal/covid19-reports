import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      ${bootstrap}
      
      .container-fluid {
        border-bottom: 1px solid var(--font-color)
      }
      
      .navbar-brand {
        color: var(--font-color);
        margin-right: 0;
        font-size: 2.4rem;
        font-weight: 600;
      }

      .navbar-brand:hover {
        color: var(--font-hover-color)
      }
    </style>

    <section class="container-fluid">
      <nav class="navbar navbar-expand-lg justify-content-center">
        <a class="navbar-brand" href="#">COVID-19</a>
      </nav>
    </section>
    `
  }
}

customElements.define('navbar-app', Navbar);