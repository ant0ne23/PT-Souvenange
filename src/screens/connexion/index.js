import { Connexion as Component } from './connexion'
import { compose } from 'redux'
import { inject, listen } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'
import listeners from './connexion.listeners'


const storeToProps = (store, props, { router }) => {
  const account = store.fb.account.get()
  return {
    ...store.fb.loginStatus.get(),
    name: account && account.name,
    group: store.fb.group.get(),
    picture: account && account.picture && account.picture.data.url,
    loginFn: () => store.dispatch('BTN_CLICKED_LOGIN'),
    logoutFn: () => store.dispatch('BTN_CLICKED_LOGOUT'),
  }
}

export const Connexion = compose(
    forRoute.absolute('CONNEXION'),
    inject(storeToProps),
  listen(listeners)
  
)(Component)