const gamesAPI = "e8e22519b15fbe8b5e858e89350b6509";
const gamesURL = "https://api-v3.igdb.com";
const REQUEST_LIMIT = 50;
const axios = require("axios");
const _ = require("lodash");

module.exports = {

buildRequestOptions(endpoint, fields, offset) {
    return {
      url: `${gamesURL}/${endpoint}`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "user-key": gamesAPI
      },
      data: `fields ${fields};` //this is a funky api - this is passed in the body of the POST request.
    };
  },
  
  getAllData(endpoint, fields, offset, allData = []) {
    let options = this.buildRequestOptions(endpoint, fields, offset);
    return axios(options)
      .then(response => {
        allData = _.concat(allData, response.data);
        if (_.size(response.data) === REQUEST_LIMIT && _.size(allData) <= 150) {
          // ask for the next page of results
          return getAllData(endpoint, fields, _.size(allData), allData);
        }
        return allData;
      })
      .catch(err => {
        console.error(err);
      });
  }
}

