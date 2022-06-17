'use strict'

import { info } from '../api/product'
import { on } from '../utils/dom'
import addProductTemplate from '../templates/ProductList/addProduct.ejs'
import EventEmitter from 'eventemitter3'

/* OLD CODE:
const {info} = require("../api/product")
const {on} = require("../utils/dom")
const addProductTemplate = require("../templates/ProductList/addProduct.ejs")
const EventEmitter = require("eventemitter3")
*/

export default class ProductList {
  /**
   *
   * @param {HTMLTableElement} listElement
   */
  constructor(listElement) {
    this.products = []
    this.listElement = listElement
    this.events = new EventEmitter()
  }

  init() {
    on('.product-search__remove-product', 'click', (event) => {
      const fdcId = parseInt(event.handleObj.getAttribute('data-fdc'), 10)
      this.removeProduct('' + fdcId)
    })

    on('.product-search__amount', 'change', (event) => {
      const fdcId = parseInt(event.handleObj.getAttribute('data-fdc'), 10)
      const value = parseInt(event.handleObj.value, 10)
      this.updateAmount('' + fdcId, value)
    })
  }

  emitNutrients() {
    const nutrients = this.getNutrients()
    this.events.emit('nutrientChange', nutrients)
  }

  getNutrientsForProduct(product) {
    const nutrients = {
      carbs: 0,
      protein: 0,
      fat: 0,
    }

    for (const foodNutrient of product.product.foodNutrients) {
      if ('' + foodNutrient.nutrient.number === '205') {
        nutrients.carbs = foodNutrient.amount
      } else if ('' + foodNutrient.nutrient.number === '204') {
        nutrients.fat = foodNutrient.amount
      } else if ('' + foodNutrient.nutrient.number === '203') {
        nutrients.protein = foodNutrient.amount
      }
    }

    return {
      carbs: (nutrients.carbs / 100) * product.amount,
      protein: (nutrients.protein / 100) * product.amount,
      fat: (nutrients.fat / 100) * product.amount,
    }
  }

  getNutrients() {
    const nutrients = {
      carbs: 0,
      protein: 0,
      fat: 0,
    }

    for (const product of this.products) {
      const productNutrients = this.getNutrientsForProduct(product)

      nutrients.carbs += productNutrients.carbs
      nutrients.protein += productNutrients.protein
      nutrients.fat += productNutrients.fat
    }

    return nutrients
  }

  updateAmount(fdcId, value) {
    for (const product of this.products) {
      if (product.product['fdcId'] === fdcId) {
        product.amount = value
        break
      }
    }
    this.emitNutrients()
    // console.log("updateAmount:", this.products)
  }

  removeProduct(fdcId) {
    let index = null
    for (const i in this.products) {
      const product = this.products[i]
      if ('' + product.product['fdcId'] === '' + fdcId) {
        index = i
        break
      }
    }
    if (index !== null) {
      this.products.splice(index, 1)

      const trElement = document.querySelector(
        ".product-search__product-row[data-fdc='" + fdcId + "']"
      )
      if (trElement) trElement.remove()
    }

    this.emitNutrients()
    // console.log("this.products:", this.products)
  }

  async addProduct(fdcId) {
    for (const product of this.products) {
      if ('' + product.product['fdcId'] === '' + fdcId) {
        return Promise.resolve()
      }
    }

    return info(fdcId)
      .then((product) => this.addFetchedProduct(product))
      .catch((err) => {
        alert(
          'Produkt konnte nicht hinzugefügt werden, bitte nochmal probieren!'
        )
      })
  }

  addFetchedProduct(product) {
    this.products.push({
      amount: 100,
      product,
    })
    console.log('this.products:', this.products)

    const productHtml = addProductTemplate({
      title: product['description'],
      fdcId: product['fdcId'],
    })

    // this.listElement.innerHTML = this.listElement.innerHTML + productHtml
    this.listElement.insertAdjacentHTML('beforeend', productHtml)
    // console.log(productHtml)

    // this.getNutrients()

    this.emitNutrients()
  }
}

module.exports = ProductList
