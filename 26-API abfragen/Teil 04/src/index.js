'use strict'

const productApi = require("./api/product")

const search = productApi.search
const info = productApi.info

info(1102747).then((res) => {
    console.log(res)
})
