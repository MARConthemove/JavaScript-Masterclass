'use strict'

const ProductNutrients = require('./ProductNutrients')

// Unit Test: Modul setNutrients
describe('ProductNutrients', () => {
  let carbElement, proteinElement, fatElement, productNutrients

  beforeEach(() => {
    // Variablen Initialisierung:
    carbElement = document.createElement('span')
    proteinElement = document.createElement('span')
    fatElement = document.createElement('span')

    productNutrients = new ProductNutrients(
      carbElement,
      proteinElement,
      fatElement
    )
  })

  test('it should initialize (a new instance)', () => {
    expect(productNutrients).not.toBeNull()
  })

  describe('setNutrients', () => {
    test('it should write carbs to DOM', () => {
      productNutrients.setNutrients({ carbs: 100, protein: 0, fat: 0 })
      expect(carbElement.textContent).toBe('100')
      expect(proteinElement.textContent).toBe('0')
      expect(fatElement.textContent).toBe('0')
    })

    test('it should write protein to DOM', () => {
      productNutrients.setNutrients({ carbs: 0, protein: 100, fat: 0 })
      expect(carbElement.textContent).toBe('0')
      expect(proteinElement.textContent).toBe('100')
      expect(fatElement.textContent).toBe('0')
    })

    test('it should write fat to DOM', () => {
      productNutrients.setNutrients({ carbs: 0, protein: 0, fat: 100 })
      expect(carbElement.textContent).toBe('0')
      expect(proteinElement.textContent).toBe('0')
      expect(fatElement.textContent).toBe('100')
    })

    test('it should write every nutrients correct rounded to the DOM', () => {
      productNutrients.setNutrients({
        carbs: 3.33333,
        protein: 1.1111,
        fat: 9.51611,
      })
      expect(carbElement.textContent).toBe('3.33')
      expect(proteinElement.textContent).toBe('1.11')
      expect(fatElement.textContent).toBe('9.52')
    })
  })
})
