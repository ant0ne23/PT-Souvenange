import { when } from 'k-ramel'
import * as reactions from './app.reactions'

export const listeners = [
  when('@@krml/LISTENERS>ADDED>APP')(reactions.init),
  when('@@http/GET_TODOS>GET>ENDED')(reactions.setTodos),
]
