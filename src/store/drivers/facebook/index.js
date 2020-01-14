import { types } from 'k-ramel'

const init = ({ fb, drivers }) => {
  const { window } = drivers
  const { document } = window

  window.fbAsyncInit = () => {
    window.FB.init({
      appId: '504804076812649',
      cookie: true,
      xfbml: true,
      version: 'v3.1',
    })

    window.FB.AppEvents.logPageView()
    fb.init.set(true)
  };

  ((d, s, id) => {
    const fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
      return
    }
    const js = d.createElement(s)
    js.id = id
    js.src = 'https://connect.facebook.net/en_US/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
  })(document, 'script', 'facebook-jssdk')
}

const getLoginStatus = ({ drivers, fb }) => {
  const { window } = drivers
  window.FB.getLoginStatus((response) => {
    fb.loginStatus.set(response)
  }, true)
}

const login = ({ drivers, fb }) => {
  const { window } = drivers
  window.FB.login((response) => {
    fb.loginStatus.set(response)
  }, { scope: 'public_profile,groups_access_member_info' })
}

const logout = ({ drivers, fb }) => {
  const { window } = drivers
  fb.loginStatus.reset()
  fb.status.reset()
  fb.group.reset()
  window.FB.logout((response) => {
    fb.loginStatus.set(response)
  })
}

const getUserInfo = ({ drivers, fb }) => {
  const { window } = drivers
  const loginStatus = fb.loginStatus.get()
  const userId = loginStatus.authResponse && loginStatus.authResponse.userID

  if (userId) {
    window.FB.api(`/${userId}?fields=name,picture`, (response) => {
      fb.account.set(response)
    })
    window.FB.api(`/${userId}/groups`, (response) => {
      if (response && response.data.length > 0) {
        const group = response.data.find(g => g.id === '784905061653719')
        fb.group.set(group)
      }
    })
  }
}

export default ({
  getReducer: () => ({
    path: 'fb',
    reducer: {
      init: types.bool(),
      loginStatus: types.object(),
      account: types.object(),
      group: types.object(),
    },
  }),
  getDriver: store => ({
    init: () => init(store),
    status: () => (store.fb && store.fb.init.get()),
    getLoginStatus: () => getLoginStatus(store),
    login: () => login(store),
    logout: () => logout(store),
    getUserInfo: () => getUserInfo(store),
  }),
})
