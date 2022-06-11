'use strict'

const { info } = require('../api/product')
const { on } = require('../utils/dom')
const addProductTemplate = require('../templates/ProductList/addProduct.ejs')

/** Constructor Function ProductList
 *
 * @param {HTMLTableElement} listElement
 */
function ProductList(listElement) {
    this.products = []
    this.listElement = listElement
}

ProductList.prototype.init = function() {
    on('.product-search__remove-product', 'click', (event) => {
        const fdcId = parseInt(event.handleObj.getAttribute('data-fdc'), 10)
        this.removeProduct(fdcId)
    })
}

ProductList.prototype.removeProduct = function(fdcId) {
    let index = null

    for (const i in this.products) {
        const product = this.products[i]
        if (product['fdcId'] === fdcId) {
            index = i
            break
        }
    }
    if (index !== 0) {
        this.products.splice(index, 1)
    }
}

ProductList.prototype.addProduct = function(fdcId) {
    info(fdcId).then((product) => {
        this.products.push(product)
        console.log(this.products)
        const productHtml = addProductTemplate({
            title: product['description'],
            fdcId: product['fdcId'],
        })

        this.listElement.insertAdjacentHTML('beforeend', productHtml)
        // this.listElement.innerHTML = this.listElement.innerHTML + productHtml
    })
}

// Exportieren von ProductList über prototype.module.exports = {...}
module.exports = ProductList
