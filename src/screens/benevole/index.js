import { Benevole as Component } from './benevole'
import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'


const storeToProps = (store, _props, { router }) => {
  return {
 
  }
}

export const Benevole = compose(
  forRoute('BENEVOLE'),
  inject(storeToProps),
  
)(Component)
