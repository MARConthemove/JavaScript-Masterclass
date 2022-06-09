'use strict'

// .default for autocompletion
const axios = require('axios').default

const URL = 'https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations'

axios
    .get(URL)
    .then((res) => {
        const data = res.data
        console.log("data: ", data)
    })
    .catch((err) => {
        console.error(err)
    })
