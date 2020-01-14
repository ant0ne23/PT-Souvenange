import { when } from 'k-ramel'
import {
  getLoginStatus,
  login,
  logout,
  getUserInfo
} from './connexion.reactions'

export default [
  when('@@krf/SET>FB>INIT')(getLoginStatus),
  when('BTN_CLICKED_LOGIN')(login),
  when('BTN_CLICKED_LOGOUT')(logout),
  when('@@krf/SET>FB>LOGINSTATUS')(getUserInfo),
]
