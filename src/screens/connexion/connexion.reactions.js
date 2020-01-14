
export const getLoginStatus = (props, store, { facebook }) => {
  facebook.getLoginStatus()
}

export const login = (props, store, { facebook }) => {
  facebook.login()
}

export const logout = (props, store, { facebook }) => {
  facebook.logout()
}

export const getUserInfo = ({payload}, store, { facebook }) => {
  if (payload && payload.status === 'unknown') return
  facebook.getUserInfo()
}