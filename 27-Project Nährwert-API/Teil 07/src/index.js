'use strict'

require('../scss/index.scss')

const ProductSearch = require('./controllers/ProductSearch')
const ProductList = require('./controllers/ProductList')

// Neue Instanz von ProductSearch erstellt
const productSearch = new ProductSearch(
    document.getElementById('productSearchInput'),
    document.getElementById('productSearchButton'),
    document.getElementById('productSearchResults')
)
productSearch.init()

// Neue Instanz von ProductList erstellt
const productList = new ProductList(
    document.getElementById('productList')
)

productList.init()

// Verknüpfung von productSearch mit productList
productSearch.events.on('productSelected', (fdcId) => {
    productList.addProduct(fdcId)
})

