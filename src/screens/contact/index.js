import { Contact as Component } from './contact'
import { compose } from 'redux'
import { inject } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'

const storeToProps = (store, props, { router }) => {
  return {
    OnClickPartenaire: () => router.push('PARTENAIRE'),
    OnClickParticulier: () => router.push('PARTICULIER'),
    OnClickBenevole: () => router.push('BENEVOLE'),
    OnClickPresse: () => router.push('PRESSE'),
    OnClickAutres: () => router.push('AUTRES'),
  }
}

export const Contact = compose(
    forRoute.absolute('CONTACT'),
    inject(storeToProps),
    
  
)(Component)