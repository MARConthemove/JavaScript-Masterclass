'use strict'

const axios = require('axios').default

axios
    .get('https://api.nal.usda.gov/fdc/v1/foods/search', {
        params: {
            api_key: '2foBawt5jmtipI7Hb4oyhj8fLZHOAJdjMatzM6Y5',
            query: 'Apple Juice',
        },
    })
    .then((response) => {
        // console.log(response.data)
        for (const food of response.data['foods']) {
            console.log(food['fdcId'] + ': ' + food['description'])
        }
    })
