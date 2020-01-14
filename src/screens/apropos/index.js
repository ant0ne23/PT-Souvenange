import { Apropos as Component } from './apropos'
import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'


const storeToProps = (store, _props, { router }) => {
  return {
 
  }
}

export const Apropos = compose(
  forRoute('APROPOS'),
  inject(storeToProps),

)(Component)
