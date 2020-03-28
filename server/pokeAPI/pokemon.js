const axios = require("axios");
const _ = require("lodash");
const BASE_POKE_URL = "https://pokeapi.co/api/v2/pokemon";
const BASE_POKE_LIMIT = 50;

module.exports = {
  buildRequestOptions(endpoint, limit, offset) {
    return {
      url: `${endpoint}`,
      method: "GET",
      params: {
        offset: offset,
        limit: limit
      }
    };
  },

  getAllData(endpoint, limit, offset, allData = []) {
    let options = this.buildRequestOptions(endpoint, limit, offset);
    return axios(options)
      .then(response => {
        let flatten = response.data.results.map(pokemon => {
          return pokemon.name;
        });
        allData = _.concat(allData, flatten);
        if (response.data.next) {
          return this.getAllData(
            BASE_POKE_URL,
            BASE_POKE_LIMIT,
            _.size(allData),
            allData
          );
        }
        return allData;
      })
      .catch(err => {
        console.error(err);
      });
  }
};
