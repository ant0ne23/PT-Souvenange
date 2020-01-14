import { when } from 'k-ramel'
import * as reactions from './article.reactions'

export const listeners = [
  when('@@krml/LISTENERS>ADDED>ARTICLE')(reactions.init),
  when('@@http/GET_ARTICLE>GET>ENDED')(reactions.setArticle),

]
