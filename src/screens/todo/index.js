import { Todo as Component } from './todo'
import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'

const storeToProps = (store, _props, { router }) => {
  const id = router.getPathParam('id')
  return {
    todo: store.data.todos.get(Number(id)) || {},
  }
}

export const Todo = compose(
  forRoute.absolute('TODO'),
  inject(storeToProps)
)(Component)
