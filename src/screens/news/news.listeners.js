import { when } from 'k-ramel'
import * as reactions from './news.reactions'

export const listeners = [
  when('@@krml/LISTENERS>ADDED>NEWS')(reactions.init),
  when('@@http/GET_NEWS>GET>ENDED')(reactions.setNews),

]
