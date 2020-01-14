import { CarteBenevole as Component } from './carteBenevole'
import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'


const storeToProps = (store, _props, { router }) => {
  return {
 
  }
}

export const CarteBenevole = compose(
  forRoute('CARTEBENEVOLE'),
  inject(storeToProps),

)(Component)