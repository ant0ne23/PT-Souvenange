import { TrombinoscopeDetail as Component } from './trombinoscopeDetail'
import { compose } from 'redux'
import { inject, listen } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'
import { listeners } from './trombinoscopeDetail.listeners'

const storeToProps = (store, _props, { router }) => {
  return {
    ...store.data.selectedPersonnes.get()
   
  }
}

export const TrombinoscopeDetail = compose(
  forRoute('TROMBINOSCOPE_DETAIL'),
  inject(storeToProps),
  listen(listeners, 'TROMBINOSCOPE_DETAIL')
)(Component)
