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

    on('.product-search__amount', 'change', (event) => {
        const fdcId = parseInt(event.handleObj.getAttribute('data-fdc'), 10)
        const value = parseInt(event.handleObj.value, 10)
        this.updateAmount(fdcId, value)
    })
}

ProductList.prototype.updateAmount = function(fdcId, value) {
    for (const product of this.products) {
        if (product.product["fdcId"] === fdcId) {
            product.amount = value
            break
        }
    }
    console.log("updateAmount: ", this.products)
}

ProductList.prototype.removeProduct = function(fdcId) {
    // deleting item from array
    let index = null

    for (const i in this.products) {
        const product = this.products[i]
        if (product.product['fdcId'] === fdcId) {
            index = i
            break
        }
    }
    if (index !== null) {
        this.products.splice(index, 1)

        // deleting html <tr> element
        const trElement = document.querySelector(
            ".product-search__product-row[data-fdc='" + fdcId + "']"
        )

        if (trElement) {
            trElement.remove()
        }
    }
}

ProductList.prototype.addProduct = function(fdcId) {
    info(fdcId).then((product) => {
        this.products.push({
            amount: 100,
            product: product,
        })
        console.log("Products Array: ", this.products)
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
