import { Partenaire as Component } from './partenaire'
import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'


const storeToProps = (store, _props, { router }) => {
  return {
 
  }
}

export const Partenaire = compose(
  forRoute('PARTENAIRE'),
  inject(storeToProps),
  
)(Component)
