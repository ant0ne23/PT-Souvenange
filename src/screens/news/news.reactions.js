export const init = ({ payload }, _store, { http }) => {
  console.log('hodor')
  http('GET_NEWS').get('/api/news')
}

export const setNews = ({ payload }, store) => {
  store.data.news.set(payload)

}

