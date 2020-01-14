import { Parrain as Component } from './parrain'
import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'


const storeToProps = (store, _props, { router }) => {
  return {
 
  }
}

export const Parrain = compose(
  forRoute('PARRAIN'),
  inject(storeToProps),

)(Component)
