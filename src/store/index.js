import { createStore, types } from 'k-ramel'


import drivers from './drivers'
import { mocksListeners } from '__mocks__'

export const store = createStore(
  {
    data: 
    {
      todos: types.keyValue(),
      mecenes: types.keyValue(),
      friends: types.keyValue(),
      news : types.keyValue(),
      temoignages : types.keyValue(),
      article : types.keyValue(),
      personnes : types.keyValue(),
      selectedNew : types.object(),
      selectedPersonnes : types.object(),
    },
    ui: {},
  },
  {
    name: 'Souvenange - store',
    drivers,
  }
)

store.listeners.add(mocksListeners)
