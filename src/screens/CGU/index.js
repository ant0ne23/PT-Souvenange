import { CGU as Component } from './CGU'
import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'


const storeToProps = (store, _props, { router }) => {
  return {
 
  }
}

export const Cgu = compose(
  forRoute('CGU'),
  inject(storeToProps),

)(Component)
