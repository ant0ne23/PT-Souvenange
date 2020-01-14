export const addTodo = ({ payload }, _store, { http }) => {
  http('SET_TODO').post('/api/todo', { title: payload })
}

export const setTodo = ({ payload }, store) => {
  store.data.todos.add(payload)
}
