import { when } from 'k-ramel'
import * as reactions from './temoignages.reactions'

export const listeners = [
  when('@@krml/LISTENERS>ADDED>TEMOIGNAGES')(reactions.init),
  when('@@http/GET_TEMOIGNAGES>GET>ENDED')(reactions.setTemoignages),

]
