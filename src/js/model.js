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

//loadFilterData("europe");
