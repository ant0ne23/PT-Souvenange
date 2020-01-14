import { Presse as Component } from './presse'
import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'


const storeToProps = (store, _props, { router }) => {
  return {
 
  }
}

export const Presse = compose(
  forRoute('PRESSE'),
  inject(storeToProps),
  
)(Component)
