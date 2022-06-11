"use strict"

const { info } = require("../api/product")
const addProductTemplate = require("../templates/ProductList/addProduct.ejs")

/** Constructor Function ProductList
 *
 * @param {HTMLTableElement} listElement
 */
function ProductList(listElement) {
    this.listElement = listElement
}

ProductList.prototype.init = function() {}

ProductList.prototype.addProduct = function(fdcId) {
    info(fdcId)
        .then((product) => {
            const productHtml = addProductTemplate({
                title: product["description"]
            })

            this.listElement.insertAdjacentHTML("beforeend", productHtml)
            // this.listElement.innerHTML = this.listElement.innerHTML + productHtml
        })
}

// Exportieren von ProductList über prototype.module.exports = {...}
module.exports = ProductList


