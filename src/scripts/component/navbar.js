import '../../assets/github-icon.png';
import '../../assets/linkedin-icon.png';

class Navbar extends HTMLElement {
	constructor() {
		super();
		// Attach shadow dom
		this.shadowDOM = this.attachShadow({
			mode: 'open',
		});
	}

	// If connected
	connectedCallback() {
		this.render();
	}

	// Render html element
	render() {
		const github = 'github-icon.png';
		const linkedin = 'linkedin-icon.png';

		// Insert shadowDOM HTML
		this.shadowDOM.innerHTML = `
      <style>
        ${bootstrap}
        .container-fluid { border-bottom: 1px solid var(--font-color) }
        
        .navbar {
          padding: 1.5rem 0rem;
        }

        .navbar-brand {
          color: var(--font-color);
          font-size: 2.4rem;
          font-weight: 600;
        }

        .navbar-brand:hover { color: var(--font-hover-color) }

        img { width: 50%; }
      </style>

      <section class="container">
        <nav class="navbar navbar-expand-lg justify-content-center">
          <a class="navbar-brand mr-auto" href="#">COVID-19</a>
          <ul class="navbar-nav ml-auto flex-row">
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/muhazizal" target="_blank">
                <img src="${github}" alt="Github Creator" title="Github Creator">
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="https://www.linkedin.com/in/muhammad-aziz-al-assad-a7143218b/" target="_blank">
                <img src="${linkedin}" alt="Linkedin Creator" title="Linkedin Creator">
              </a>
            </li>
          </ul>
        </nav>
      </section>
    `;
	}
}

customElements.define('navbar-app', Navbar);
