"use strict"

const ProductList = require("./ProductList")

describe('ProductList', () => {
  let productList, listElement

  beforeEach(() => {
    listElement = document.createElement("tbody")
    productList = new ProductList(listElement)
  });

  describe('addFetchProduct', () => {
    const product = {
      describtion: "TEST-Produkt",
      fdcId: "123456",
      foodNutrients: []
    }

    test("It should add this product to this.products", () => {
      productList.addFetchedProduct(product)
      expect(productList.products.length).toBe(1)
      expect(productList.products[0].amount).toBe(100)
      expect(productList.products[0].product).toBe(product)
    })
  })

});
