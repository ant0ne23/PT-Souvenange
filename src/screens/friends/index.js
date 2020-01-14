import { Friends as Component } from './friends'
import { compose } from 'redux'
import { inject, listen } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'
import { listeners } from './friends.listeners'

const storeToProps = (store, props, { router }) => {
  return {
    friends: store.data.friends.getAsArray(),
  }
}

export const Friends = compose(
  forRoute.absolute('FRIENDS'),
  inject(storeToProps),
  listen(listeners, 'FRIENDS')

)(Component)
