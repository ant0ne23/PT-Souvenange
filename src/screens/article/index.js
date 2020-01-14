import { Article as Component } from './article'
import { compose } from 'redux'
import { inject, listen } from '@k-ramel/react'
import { forRoute } from '@k-redux-router/react-k-ramel'
import { listeners } from './article.listeners'

const storeToProps = (store, _props, { router }) => {
  return {
    article: store.data.article.getAsArray(),
  }
}

export const Article = compose(
  forRoute('ARTICLE'),
  inject(storeToProps),
  listen(listeners, 'ARTICLE')

)(Component)
