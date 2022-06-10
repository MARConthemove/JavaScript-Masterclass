"use strict";

const axios = require("axios");


axios.get("https://api.nal.usda.gov/fdc/v1/foods/search", {
        params: {
            api_key: "f30b8Dr9qFteNLSfCtaOIQX1SHHJSxOIrwfb87Vo",
            query: "Apple Juice"
        }
    })
    .then(function(response) {
        for (const food of response.data['foods']) {
            console.log(food['fdcId'] + ": " + food['description']);
        }
    });