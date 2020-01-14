export const init = ({ payload }, _store, { http }) => {
  console.log('hodor')
  http('GET_FRIENDS').get('/api/friends')
}

export const setFriends = ({ payload }, store) => {
  store.data.friends.set(payload)

}

