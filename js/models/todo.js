/*
* Este código cria uma nova classe Todo e adiciona dentro do namespace
* da nossa app.
*/
Todos.Todo = DS.Model.extend({
  title: DS.attr("string"),
  isCompleted: DS.attr("boolean")
});

//Fixtures, até conectarmos a app a algum sistema de persistencia.

Todos.Todo.FIXTURES = [
  {
    id: 1,
    title: "Learn Ember.js",
    isCompleted: true
  },
  {
    id: 2,
    title: "Learn Ruby",
    isCompleted: false
  },
  {
    id: 3,
    title: "Learn Haskell",
    isCompleted: false
  },
  {
    id: 4,
    title: "Enviar e-mail para Fulano",
    isCompleted: false
  }
]

