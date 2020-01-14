import { News as Component } from './news'
import { compose } from 'redux'
import { inject, listen } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'
import { listeners } from './news.listeners'

const storeToProps = (store, props, { router }) => {
  return {
    news: store.data.news.getAsArray(),
  }
}

export const News = compose(
  forRoute.absolute('NEWS'),
  inject(storeToProps),
  listen(listeners, 'NEWS')

)(Component)
