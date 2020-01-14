import { when } from 'k-ramel'
import * as reactions from './trombinoscope.reactions'

export const listeners = [
  when('@@krml/LISTENERS>ADDED>TROMBINOSCOPE')(reactions.init),
  when('@@http/GET_TROMBINOSCOPE>GET>ENDED')(reactions.setPersonnes),

]
