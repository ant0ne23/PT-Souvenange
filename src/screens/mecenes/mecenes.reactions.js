export const init = ({ payload }, _store, { http }) => {
    console.log('hodor')
    http('GET_MECENES').get('/mecenes')
  }
  
  export const setMecenes = ({ payload }, store) => {
    store.data.mecenes.set(payload)
  
  }
  
  