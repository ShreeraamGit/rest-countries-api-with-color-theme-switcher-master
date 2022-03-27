class SearchView {
  _parentElement = document.querySelector(".search-bar");
  _countriesContainer = document.querySelector(".country-details-box");

  getQuery() {
    const query = this._parentElement.querySelector(".search__country").value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector(".search__country").value = "";
  }

  _clear() {
    this._countriesContainer.innerHTML = "";
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
