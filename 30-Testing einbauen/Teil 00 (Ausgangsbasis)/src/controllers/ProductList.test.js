'use strict'

jest.mock('../api/product')
// const productApi = require('../api/product')

const ProductList = require('./ProductList')

describe('ProductList', () => {
  let productList, listElement

  beforeEach(() => {
    listElement = document.createElement('tbody')
    productList = new ProductList(listElement)
  })

  describe('addProduct', () => {
    test('it should add a product', () => {
      // https://jestjs.io/docs/en/mock-functions
      productList.addFetchedProduct = jest.fn()

      return productList.addProduct('555').then(() => {
        expect(productList.addFetchedProduct).toBeCalled()
        expect(productList.addFetchedProduct.mock.calls.length).toBe(1)
      })
    })
  })

  describe('addFetchProduct', () => {
    const product = {
      description: 'TEST-Produkt',
      fdcId: '123456',
      foodNutrients: [],
    }

    test('It should add this product to this.products', () => {
      productList.addFetchedProduct(product)
      expect(productList.products.length).toBe(1)
      expect(productList.products[0].amount).toBe(100)
      expect(productList.products[0].product).to(product)
    })

    test('It should generate correct HTML', () => {
      productList.addFetchedProduct(product)

      expect(
        listElement.querySelector("[data-testid='title']").textContent
      ).toBe('TEST-Produkt')

      expect(
        listElement
          .querySelector('.product-search__product-row')
          .getAttribute('data-fdc')
      ).toBe('123456')

      expect(
        listElement
          .querySelector('.product-search__remove-product')
          .getAttribute('data-fdc')
      ).toBe('123456')
    })

    test('It should trigger a nutrientChange event', (done) => {
      productList.events.on('nutrientChange', (nutrients) => {
        done()
      })
      productList.addFetchedProduct(product)
    })
  })
})
