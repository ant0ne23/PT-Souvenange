import { CarteConvention as Component } from './carteConvention'
import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'


const storeToProps = (store, _props, { router }) => {
  return {
 
  }
}

export const CarteConvention = compose(
  forRoute('CARTECONVENTION'),
  inject(storeToProps),

)(Component)
