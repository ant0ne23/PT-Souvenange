import { Mecenes as Component } from './mecenes'
import { compose } from 'redux'
import { inject, listen } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'
import { listeners } from './mecenes.listeners'

const storeToProps = (store, props, { router }) => {
  return {
    mecenes: store.data.mecenes.getAsArray(),
  }
}

export const Mecenes = compose(
  forRoute.absolute('MECENES'),
  inject(storeToProps),
  listen(listeners, 'MECENES')

)(Component)
