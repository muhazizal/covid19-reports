import '../component/navbar.js';
import '../component/title.js';
import '../component/global-reports.js';
import '../component/searchbar.js';
import '../component/country-list.js';
import DataSource from '../data/data-source.js';

const main = () => {
  // Global Reports
  const globalReportsElement = document.querySelector('global-reports-app');
  
  const showReports = results => {
    globalReportsElement.reports = results;
  }

  const showFallbackMessage = message => {
    globalReportsElement.renderError(message);
  }

  if (DataSource) {
    DataSource.globalReports()
      .then(showReports)  
      .catch(showFallbackMessage);
  }
  
  // Search Country
  const searchBar = document.querySelector('searchbar-app');
  const countryList = document.querySelector('country-list');

  const searchSuccess = (results) => {
    countryList.countries = results;
  }

  const searchFailed = (message) => {
    countryList.renderError(message);
  }

  const btnSearchClicked = () => {
    DataSource.searchCountry(searchBar.value)
      .then(searchSuccess)
      .catch(searchFailed);
  }

  searchBar.clickEvent = btnSearchClicked;
}

export default main;