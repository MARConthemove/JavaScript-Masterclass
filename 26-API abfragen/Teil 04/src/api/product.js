'use strict'

const axios = require('axios').default

module.exports.search = function search(term) {
    return axios
        .get('https://api.nal.usda.gov/fdc/v1/foods/search', {
            params: {
                api_key: '2foBawt5jmtipI7Hb4oyhj8fLZHOAJdjMatzM6Y5',
                query: term,
            },
        })
        .then(function (response) {
            return response.data['foods']
        })
}

module.exports.info = function info(fdcId) {
    return axios
        .get('https://api.nal.usda.gov/fdc/v1/food/' + fdcId, {
            params: {
                api_key: '2foBawt5jmtipI7Hb4oyhj8fLZHOAJdjMatzM6Y5',
            },
        })
        .then(function (response) {
            console.log(response.data)
        })
}
