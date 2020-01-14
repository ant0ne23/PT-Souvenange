import { when } from 'k-ramel'
import * as reactions from './friends.reactions'

export const listeners = [
  when('@@krml/LISTENERS>ADDED>FRIENDS')(reactions.init),
  when('@@http/GET_FRIENDS>GET>ENDED')(reactions.setFriends),

]
