"use strict";

const axios = require("axios");

module.exports.search = function search(term) {
    return axios.get("https://api.nal.usda.gov/fdc/v1/foods/search", {
        params: {
            api_key: "f30b8Dr9qFteNLSfCtaOIQX1SHHJSxOIrwfb87Vo",
            query: term
        }
    })
    .then((response) => response.data)
}


module.exports.info = function info(fdcId) {
    return axios.get("https://api.nal.usda.gov/fdc/v1/food/" + fdcId, {
        params: {
            api_key: "f30b8Dr9qFteNLSfCtaOIQX1SHHJSxOIrwfb87Vo"
        }
    })
    .then((response) => response.data)
}