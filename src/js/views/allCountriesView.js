import "regenerator-runtime/runtime";
class AllCountriesView {
  _data;
  _parentElement = document.querySelector(".country-details-box");

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return;
    }
    this._data = data;
    //console.log(data);
    const markUp = this._generateHtml();
    //this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markUp);
  }

  _generateHtml() {
    return `<a class="country-link" href="#" value="${this._data.countryName}">
        <div class="content-box  h-[21rem] lg:h-[22rem] w-full lg:w-[16rem] xl:w-[17rem] 2xl:w-[19rem] mb-14">
          <div class="country-flag dark:border-none border rounded-t-md h-2/4">
            <img class="h-full w-full rounded-t-md" src="${this._data.img}" alt="${this._data.countryName}-flag">
          </div>
          <div class="country-details drop-shadow-lg dark:border-none border rounded-b-md flex flex-col justify-center h-2/4 bg-v-dark-gray dark:bg-dark-blue px-8 py-8">
            <div class="dark:text-white text-v-dark-blue font-bold text-xl">${this._data.countryName}</div>
            <div class="mt-5 dark:text-white text-v-dark-blue text-sm">Population: ${this._data.population}</div>
            <div class="dark:text-white text-v-dark-blue mt-2 text-sm">Region: ${this._data.region}</div>
            <div class="dark:text-white text-v-dark-blue mt-2 text-sm">Capital: ${this._data.capital}</div>
          </div>
        </div>
      </a>`;
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default new AllCountriesView();

if (module.hot) {
  module.hot.accept();
}
