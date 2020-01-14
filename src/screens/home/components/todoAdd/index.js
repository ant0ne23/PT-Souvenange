import { TodoAdd as Component } from './todoAdd'
import { inject } from '@k-ramel/react'

const storeToProps = store => {
  return {
    onSubmit: title => store.dispatch({ type: 'TODO_ADD', payload: title }),
  }
}

export const TodoAdd = inject(storeToProps)(Component)
