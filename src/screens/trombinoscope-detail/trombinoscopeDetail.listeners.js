import { when } from 'k-ramel'
import * as reactions from './trombinoscopeDetail.reactions'

export const listeners = [
  when('@@krml/LISTENERS>ADDED>TROMBINOSCOPE_DETAIL')(reactions.init),
  when('@@http/GET_TROMBINOSCOPE>GET>ENDED')(reactions.setPersonnes),
]