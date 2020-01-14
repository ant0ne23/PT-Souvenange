import { Error404 as Component } from './error404'
import { forRoute } from '@k-redux-router/react-k-ramel'

export const Error404 = forRoute.notFound()(Component)
