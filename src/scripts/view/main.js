import '../component/navbar.js';
import '../component/title.js';
import '../component/global-reports.js';
import '../component/searchbar.js';
import '../component/country-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
	// Global reports element
	const globalReportsElement = document.querySelector('global-reports-app');

	// Set reports value
	const showReports = (results) => {
		globalReportsElement.reports = results;
	};

	// Set fallback message on error
	const showFallbackMessage = (message) => {
		globalReportsElement.renderError(message);
	};

	// If data source avail, then show reports, or catch fallback
	if (DataSource) {
		DataSource.globalReports().then(showReports).catch(showFallbackMessage);
	}

	// Search country element
	const searchBar = document.querySelector('searchbar-app');
	const countryList = document.querySelector('country-list');

	// Set search result on success
	const searchSuccess = (results) => {
		countryList.countries = results;
		const countryItem = countryList.shadowRoot.querySelector('country-item');
		const countryName = countryItem.shadowRoot.querySelector('.card-header');

		countryName.scrollIntoView({
			behavior: 'smooth',
		});
	};

	// Set search result on failed
	const searchFailed = (message) => {
		countryList.renderError(message);
	};

	// Set search button value when clicked
	const btnSearchClicked = () => {
		DataSource.searchCountry(searchBar.value).then(searchSuccess).catch(searchFailed);
	};

	// Set click event value
	searchBar.clickEvent = btnSearchClicked;
};

export default main;
