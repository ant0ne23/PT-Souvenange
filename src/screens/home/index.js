import { Home as Component } from './home'
import { compose } from 'redux'
import { inject, listen } from '@k-ramel/react'

import { forRoute } from '@k-redux-router/react-k-ramel'
import { listeners } from './home.listeners'

const storeToProps = (store, _props, { router }) => {
  return {
    todos: store.data.todos.getAsArray(),
    onClick: id => () => router.push('TODO', { id: `${id}` }),
  }
}

export const Home = compose(
  forRoute.absolute('HOME'),
  listen(listeners),
  inject(storeToProps)
)(Component)
