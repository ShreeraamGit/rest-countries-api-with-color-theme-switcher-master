import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";
import allCountriesView from "./views/allCountriesView.js";
import eachCountriesView from "./views/eachCountriesView.js";
import * as model from "./model.js";
//import filterCountriesViews from "./view/filterCountriesViews";

//container = document.querySelector(".country-details-box");

const controlData = async function () {
  try {
    await model.loadData();
    //console.log(model.state.countryData.allResults);
    model.state.countryData.allResults.forEach((element) => {
      allCountriesView.render(element);
    });
  } catch (err) {
    console.error(`${err}`);
    throw err;
  }
};

const controlFilterAndGetValue = async function () {
  const parentElement = document.querySelector(".filter-bar");
  const listItems = document.querySelector(".origin-top-right");
  const listItemsChild = document.querySelector(".list-menu");
  parentElement.addEventListener("click", function (e) {
    listItems.classList.toggle("hidden");
  });

  listItemsChild.addEventListener("click", function (e) {
    ///console.log(e.target.text);
    const filterValue = e.target.text;
    allCountriesView._clear();
    const controlFilterData = async function () {
      await model.loadFilterData(filterValue);
      //console.log(model.state.search.searchresults);
      model.state.search.searchresults.forEach((element) => {
        allCountriesView.render(element);
      });
    };
    controlFilterData();
  });
};

const controlGetCountryName = async function (countryName) {
  await model.loadEachCountryDetail(countryName);
  //console.log(model.state.countrySelection.selectionResult[0].borders);
  eachCountriesView.renderEachCountryPage(
    model.state.countrySelection.selectionResult[0]
  );
};

const init = function () {
  controlData();
  controlFilterAndGetValue();
  eachCountriesView.addHandlerGetCountry(controlGetCountryName);
};

init();

if (module.hot) {
  module.hot.accept();
}
