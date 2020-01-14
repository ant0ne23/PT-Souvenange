export const init = ({ payload }, _store, { http }) => {
    console.log('hodor')
    http('GET_TEMOIGNAGES').get('/api/temoignages')
  }
  
  export const setTemoignages = ({ payload }, store) => {
    store.data.temoignages.set(payload)
  }