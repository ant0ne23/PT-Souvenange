/* eslint-env browser */
import http from '@k-ramel/driver-http'
import { router } from '@k-redux-router/react-k-ramel'
import {routes} from './routes'
import facebook from './facebook'

export default {
  router: router({
    routes,
  }),
  facebook,
  http: http(),
  window: { getDriver: () => window },
}
