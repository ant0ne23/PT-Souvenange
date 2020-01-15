import { Trombinoscope as Component } from './trombinoscope'
import { compose } from 'redux'
import { inject, listen } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'
import { listeners } from './trombinoscope.listeners'

const storeToProps = (store, _props, { router }) => {
  return {
    personnes : store.data.personnes.getAsArray(),
    onClick: id => () => router.push('TROMBINOSCOPE_DETAIL', { id: `${id}`})
  }
}

export const Trombinoscope = compose(
  forRoute.absolute('TROMBINOSCOPE'),
  inject(storeToProps),
  listen(listeners, 'TROMBINOSCOPE')
)(Component)
