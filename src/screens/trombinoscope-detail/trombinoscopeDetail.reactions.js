export const init = (_action, _store, { http, router }) => {
    const id = router.getPathParam('id')
    http('GET_TROMBINOSCOPE').get('/benevoles/' + id)
  }
  
  export const setPersonnes = ({ payload }, store, {router}) => {
    store.data.selectedPersonnes.set(payload)
  }