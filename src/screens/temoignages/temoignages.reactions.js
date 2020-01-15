export const init = ({ payload }, _store, { http }) => {
    console.log('hodor')
    http('GET_TEMOIGNAGES').get('/temoignages')
  }
  
  export const setTemoignages = ({ payload }, store) => {
    store.data.temoignages.set(payload)
  }