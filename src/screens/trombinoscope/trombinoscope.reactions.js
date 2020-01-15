export const init = ({ payload }, _store, { http }) => {
  console.log('hodor')
  http('GET_TROMBINOSCOPE').get('/benevoles')
}

export const setPersonnes = ({ payload }, store) => {
  store.data.personnes.set(payload)

}

