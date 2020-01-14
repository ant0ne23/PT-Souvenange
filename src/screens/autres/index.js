import { Autres as Component } from './autres'
import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'


const storeToProps = (store, _props, { router }) => {
  return {
 
  }
}

export const Autres = compose(
  forRoute('AUTRES'),
  inject(storeToProps),
  
)(Component)
