export const init = ({ payload }, _store, { http }) => {
    console.log('hodor')
    http('GET_ARTICLE').get('/articles')
  }
  
  export const setArticle = ({ payload }, store) => {
    store.data.article.set(payload)
  
  }
  
  