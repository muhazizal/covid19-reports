import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

class Searchbar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
        .form-inline {
          flex-wrap: nowrap;
        }
        .form-control {
          padding: 2.5rem 1.5rem;
          margin-right: 0.5rem;
          font-size: 1.4rem;
        }
        .btn {
          padding: 1.45rem 2.5rem;
          font-size: 1.4rem;
          font-weight: 600;
        }
      </style>
      
      <div class="container">
        <form class="form-inline my-5">
          <input class="form-control mr-sm-2" type="search" id="searchElement" placeholder="Search your country" aria-label="Search">
          <button class="btn btn-outline-primary my-sm-0" id="searchBtnElement" type="button">Search</button>
        </form>
      </div>
    `

    this.shadowDOM.querySelector('#searchBtnElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('searchbar-app', Searchbar);