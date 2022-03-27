import "regenerator-runtime/runtime";
//import icons from "url:../../../design/icons.svg";
class EachCountriesView {
  _data;
  _parentElement = document.querySelector(".main-page");
  _countriesContainer = document.querySelector(".country-details-box");

  addHandlerGetCountry(handler) {
    this._parentElement.addEventListener("click", function (e) {
      //e.preventDefault();
      const clickedLink = e.target.closest(".country-link");
      if (!clickedLink) return;
      const countryName = clickedLink.getAttribute("value");
      handler(countryName);
    });
  }

  renderEachCountryPage(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return this.renderError();
    }
    this._data = data;
    //console.log(data);
    const markUp = this._genrerateEachCountryMarkup(data);
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markUp);
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
  _clear() {
    this._parentElement.innerHTML = "";
  }

  _genrerateEachCountryMarkup(data) {
    return `<div class="button-back mt-28">
      <a href="index.html">
        <button
          class="border-none drop-shadow-lg w-2/6 lg:w-1/6 xl:w-32 2xl:w-44 bg-v-dark-gray dark:bg-dark-blue"
        >
          <div class="arrow-left-content p-1 flex flex-row justify-around">
            <svg
              class="h-5 w-5 text-v-dark-blue dark:text-white"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"
              />
            </svg>
            <h1 class="left-title text-v-dark-blue dark:text-white">Back</h1>
          </div>
        </button>
      </a>
    </div>
    <div
        class="country-details flex flex-col lg:flex-row lg:justify-between h-fit w-full mt-14"
      >
        <div class="country-flag">
          <img
            class="h-full w-full lg:h-[20rem] lg:w-[26rem] xl:w-[27rem] 2xl:w-[27rem] rounded-t-md"
            src="${data.img}"
            alt="${data.countryName}-flag"
          />
        </div>
        <div
          class="country-details-content text-v-dark-blue dark:text-white mt-14 lg:w-[28rem] xl:w-[46.5rem] 2xl:w-[59rem] lg:mt-0"
          id="country-details-content"
        >
          <h1 class="country-name lg:mb-0 text-2xl font-bold">${data.countryName}</h1>
          <div
            class="both-content lg:w-full flex flex-col lg:flex-row lg:justify-start items-start"
          >
            <div
              class="content-1 lg:pr-28 lg:w-fit mt-8 lg:mt-5 lg:text-sm xl:text-sm 2xl:text-base"
            >
              <h1 class="nativ-name mb-3 text-v-dark-blue dark:text-white">
                <span
                  class="text-lg lg:text-sm xl:text-base 2xl:text-lg text-v-dark-blue dark:text-white"
                  >Native Name: </span
                >${data.countryName}
              </h1>
              <h1 class="Population mb-3 text-v-dark-blue dark:text-white">
                <span
                  class="text-lg lg:text-sm 2xl:text-lg xl:text-base text-v-dark-blue dark:text-white"
                  >Population: </span
                >${data.population}
              </h1>
              <h1 class="Region mb-3 text-v-dark-blue dark:text-white">
                <span
                  class="text-lg lg:text-sm 2xl:text-lg xl:text-base text-v-dark-blue dark:text-white"
                  >Region: </span
                >${data.region}
              </h1>
              <h1 class="Sub-region mb-3 text-v-dark-blue dark:text-white">
                <span
                  class="text-lg lg:text-sm 2xl:text-lg xl:text-base text-v-dark-blue dark:text-white"
                  >Sub Region: </span
                >${data.subRegion}
              </h1>
              <h1 class="Capital mb-3 text-v-dark-blue dark:text-white">
                <span
                  class="text-lg lg:text-sm 2xl:text-lg xl:text-base text-v-dark-blue dark:text-white"
                  >Capital: </span
                >${data.capital}
              </h1>
            </div>
            <div class="content-2 mt-8 lg:mt-5 lg:w-2/4">
              <h1 class="domain mb-3 text-v-dark-blue dark:text-white">
                <span
                  class="text-lg lg:text-sm 2xl:text-lg xl:text-base text-v-dark-blue dark:text-white"
                  >Top Level Domain: </span
                >${data.tld}
              </h1>
              <h1 class="Currencies mb-3 text-v-dark-blue dark:text-white">
                <span
                  class="text-lg lg:text-sm 2xl:text-lg xl:text-base text-v-dark-blue dark:text-white"
                  >Currencies: </span
                >${data.currencies}
              </h1>
              <h1 class="languages mb-3 text-v-dark-blue dark:text-white">
                <span
                  class="text-lg lg:text-sm 2xl:text-lg xl:text-base text-v-dark-blue dark:text-white"
                  >Languages: </span
                >${data.languages}
              </h1>
            </div>
          </div>
          <div
            class="border-countries mt-8 mb-8 lg:mb-0 lg:mt-5 flex flex-col lg:flex-row lg:justify-start"
          >
          <h1 class="border-title lg:mr-4 xl:mr-4">Border Countries:</h1>
          </div>
      </div>
  </div>`;
  }
}
export default new EachCountriesView();
