import '../component/navbar.js';
import '../component/title.js';
import '../component/searchbar.js';
import '../component/country-list.js';
import '../component/report-id.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchBar = document.querySelector('searchbar-app');
  const countryList = document.querySelector('country-list');

  const btnSearchClicked = () => {
    DataSource.searchCountry(searchBar.value)
      .then(renderResult)
      .catch(fallbackResult);
  }

  const renderResult = (results) => {
    countryList.countries = results;
  }

  const fallbackResult = (message) => {
    countryList.renderError(message);
  }

  searchBar.clickEvent = btnSearchClicked;
}

export default main;