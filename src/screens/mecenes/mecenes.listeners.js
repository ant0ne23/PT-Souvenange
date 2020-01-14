import { when } from 'k-ramel'
import * as reactions from './mecenes.reactions'

export const listeners = [
  when('@@krml/LISTENERS>ADDED>MECENES')(reactions.init),
  when('@@http/GET_MECENES>GET>ENDED')(reactions.setMecenes),

]
