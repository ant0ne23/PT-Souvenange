import { Particulier as Component } from './particulier'
import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'

const storeToProps = (store, props, { router }) => {
  return {
  
  }
}

export const Particulier = compose(
    forRoute.absolute('PARTICULIER'),
    inject(storeToProps),
    
  
)(Component)