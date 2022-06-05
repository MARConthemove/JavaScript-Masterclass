"use strict"

const data = {
    todos: ["JavaScript lernen", "Node.JS lernen"],
    addTodo: function (todo) {
        this.todos.push(todo)

        this.printTodos()
    },
    printTodos: function () {
        console.log(this.todos)
    }
}

// Das Keyword "this" bezieht sich immer auf das Objekt von außerhalb

data.addTodo("3. Todo")
// data.printTodos()

// console.log(data)
