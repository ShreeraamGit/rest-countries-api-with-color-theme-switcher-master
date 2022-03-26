import { async } from "regenerator-runtime";
import "regenerator-runtime/runtime";

export const state = {
  countryData: {
    allResults: [],
  },
  search: {
    query: "",
    searchresults: [],
  },
  countrySelection: {
    selectionResult: [],
  },
};

export const loadData = async function () {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    if (!response.ok) throw new Error("Problem Getting country data");
    const data = await response.json();
    //console.log(data);
    state.countryData.allResults = data.map((el) => {
      return {
        countryName: el.name.common,
        region: el.region,
        capital: el.capital,
        population: el.population.toLocaleString(),
        img: el.flags.png,
      };
    });
    //console.log(state.countryData.allResults);
  } catch (err) {
    console.error(`${err}`);
    throw err;
  }
};

export const loadFilterData = async function (filterValue) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${filterValue}`
    );
    if (!response.ok) throw new Error("Problem Getting country data");
    const data = await response.json();
    state.search.searchresults = data.map((el) => {
      return {
        countryName: el.name.common,
        region: el.region,
        capital: el.capital,
        population: el.population.toLocaleString(),
        img: el.flags.png,
      };
    });
    //console.log(state.search.searchresults);
  } catch (err) {
    console.error(`${err}`);
    throw err;
  }
};

export const loadEachCountryDetail = async function (countryName) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    if (!response.ok) throw new Error("Problem Getting country data");
    const data = await response.json();
    state.countrySelection.selectionResult = data.map((el) => {
      return {
        countryName: el.name.common,
        region: el.region,
        capital: el.capital,
        population: el.population.toLocaleString(),
        img: el.flags.png,
        subRegion: el.subregion,
        tld: el.tld,
        currencies: Object.values(el.currencies)[0].name,
        languages: Object.values(el.languages),
      };
    });
    //console.log(state.countrySelection.selectionResult[0]);
  } catch (err) {
    console.error(err);
  }
};
//loadFilterData("europe");
//loadEachCountryDetail("tanzania");
