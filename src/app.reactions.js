

export const getTodos = (_action, _store, { http }) => {
  http('GET_TODOS').get('/api/todos')
}

export const init = (action, store, drivers) => {
  getTodos(action, store, drivers)
  drivers.facebook.init()
}

export const setTodos = ({ payload }, store) => {
  store.data.todos.set(payload)
}
