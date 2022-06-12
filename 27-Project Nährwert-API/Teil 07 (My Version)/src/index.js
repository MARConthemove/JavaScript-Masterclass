'use strict'

require('../scss/index.scss')

const ProductSearch = require('./controllers/ProductSearch')
const ProductList = require('./controllers/ProductList')
const ProductNutrients = require('./controllers/ProductNutrients')

// Neue Instanz von ProductSearch erstellt
const productSearch = new ProductSearch(
    document.getElementById('productSearchInput'),
    document.getElementById('productSearchButton'),
    document.getElementById('productSearchResults')
)
productSearch.init()



// Neue Instanz von ProductList erstellt
const productList = new ProductList(document.getElementById('productList'))

productList.init()

// Neue Instanz von ProductNutrients erstellt
const productNutrients = new ProductNutrients(
    document.getElementById('productNutrient--carbs'),
    document.getElementById('productNutrient--protein'),
    document.getElementById('productNutrient--fat')
)
productNutrients.init()

// ------ Test Products ---------
productList.addProduct(362759)
productList.addProduct(2117388)
productList.addProduct(748967)
// ------------------------------

// Verknüpfung von productSearch mit productList
productSearch.events.on('productSelected', (fdcId) => {
    productList.addProduct(fdcId)
})

productList.events.on('nutrientChange', (nutrients) => {
    productNutrients.setNutrients(nutrients)
})
