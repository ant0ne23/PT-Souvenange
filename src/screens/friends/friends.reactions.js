export const init = ({ payload }, _store, { http }) => {
  console.log('hodor')
  http('GET_FRIENDS').get('/friends')
}

export const setFriends = ({ payload }, store) => {
  store.data.friends.set(payload)
}

