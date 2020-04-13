import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/github-icon.png';
import '../../assets/instagram-icon.png';
import '../../assets/twitter-icon.png';

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const github = './dist/src/assets/github-icon.png';
    const instagram = './dist/src/assets/instagram-icon.png';
    const twitter = './dist/src/assets/twitter-icon.png';

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
        img {
          width: 50%;
        }
      </style>

      <section class="container-fluid">
        <nav class="navbar navbar-expand-lg justify-content-center">
          <a class="navbar-brand mr-auto" href="#">COVID-19</a>
          
          <ul class="navbar-nav ml-auto flex-row">
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/muhazizal" target="_blank">
                <img src="${github}" alt="Github Creator">
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.instagram.com/muhazizal/" target="_blank">
                <img src="${instagram}" alt="Instagram Creator">
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://twitter.com/muhazizal" target="_blank">
                <img src="${twitter}" alt="Twitter Creator">
              </a>
            </li>
          </ul>
        </nav>
      </section>
    `
  }
}

customElements.define('navbar-app', Navbar);