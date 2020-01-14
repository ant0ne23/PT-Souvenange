import { Trombinoscope as Component } from './trombinoscope'
import { compose } from 'redux'
import { inject, listen } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'
import { listeners } from './trombinoscope.listeners'

const storeToProps = (store) => {
  return {
    personnes : store.data.personnes.getAsArray(),
  }
}

export const Trombinoscope = compose(
  forRoute('TROMBINOSCOPE'),
  inject(storeToProps),
  listen(listeners, 'TROMBINOSCOPE')
)(Component)
