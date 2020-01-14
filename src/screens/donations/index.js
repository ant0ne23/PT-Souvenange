import { Donations as Component } from './donations'
import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'


const storeToProps = (store, _props, { router }) => {
  return {
 
  }
}

export const Donations = compose(
  forRoute('DONATIONS'),
  inject(storeToProps),

)(Component)
