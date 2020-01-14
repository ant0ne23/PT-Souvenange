import { when } from 'k-ramel'
import * as reactions from './home.reactions'

export const listeners = [
  when('TODO_ADD')(reactions.addTodo),
  when('@@http/SET_TODO>POST>ENDED')(reactions.setTodo),
]
