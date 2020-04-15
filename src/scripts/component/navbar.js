import '../../assets/github-icon.png';
import '../../assets/instagram-icon.png';
import '../../assets/twitter-icon.png';

class Navbar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open'
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const github = './dist/assets/github-icon.png';
    const instagram = './dist/assets/instagram-icon.png';
    const twitter = './dist/assets/twitter-icon.png';

    this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
        .container-fluid { border-bottom: 1px solid var(--font-color) }
        
        .navbar {
          padding: 1.5rem 3rem;
        }

        .navbar-brand {
          color: var(--font-color);
          font-size: 2.4rem;
          font-weight: 600;
        }

        .navbar-brand:hover { color: var(--font-hover-color) }

        img { width: 50%; }
      </style>

      <section class="container-fluid">
        <nav class="navbar navbar-expand-lg justify-content-center">
          <a class="navbar-brand mr-auto" href="#">COVID-19</a>
          <ul class="navbar-nav ml-auto flex-row">
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/muhazizal" target="_blank">
                <img src="${github}" alt="Github Creator" title="Github Creator">
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="https://www.instagram.com/muhazizal/" target="_blank">
                <img src="${instagram}" alt="Instagram Creator" title="Instagram Creator">
              </a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link" href="https://twitter.com/muhazizal" target="_blank">
                <img src="${twitter}" alt="Twitter Creator" title="Twitter Creator">
              </a>
            </li>
          </ul>
        </nav>
      </section>
    `;
  }
}

customElements.define('navbar-app', Navbar);