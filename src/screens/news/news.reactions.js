export const init = ({ payload }, _store, { http }) => {
  console.log('hodor')
  http('GET_NEWS').get('/news')
}

export const setNews = ({ payload }, store) => {
  store.data.news.set(payload)

}

