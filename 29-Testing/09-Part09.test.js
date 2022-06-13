'use strict'

const StudentModule = require('./09-Part09')

// Gruppierungen mit describe
describe('StudentModule', () => {
  test('Constructor should work apropiate', () => {
    const s = new StudentModule()
    expect(s.students).not.toBeNull()
  })

  describe('addStudent', () => {
    test('It should add a new student', () => {
      const s = new StudentModule()
      s.addStudent('Max Mustermann')

      expect(s.students.length).toBe(1)
      expect(s.students).toContain('Max Mustermann')
    })

    test('It should not add a new student when student already exists', () => {
      const s = new StudentModule()
      s.addStudent('Max Mustermann')
      s.addStudent('Max Mustermann')

      expect(s.students.length).toBe(1)
      expect(s.students).toContain('Max Mustermann')
    })
  })

  describe('removeStudent', () => {
    let s
    beforeEach(() => {
      s = new StudentModule()
      s.students.push('Max Mustermann')
    })
    test('Should remove a existing student', () => {
      s.removeStudent('Max Mustermann')

      expect(s.students.length).toBe(0)
      expect(s.students).not.toContain('Max Mustermann')
    })

    test("If student not in List, programm shouldn't do anything", () => {
      s.removeStudent('Monika Mustermann')

      expect(s.students.length).toBe(1)
      expect(s.students).toContain('Max Mustermann')
      expect(s.students).not.toContain('Monika Mustermann')
    })
  })
})
