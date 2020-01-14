import { when } from 'k-ramel'

import { mocks } from './mocks'

const handleFailedRequest = (action, store) => {
  // @@http/NAME>GET>STARTED -> request beeing sent
  // @@http/NAME>GET>FAILED -> request failed
  // @@http/NAME>GET>FAILED -> request succeeded

  const typeSplited = action.type.split('>')
  if (mocks) {
    const method = typeSplited[typeSplited.length - 2]

    const url = action.payload.url || action.fetch[0]
    const mockFile = mocks.find(
      m => m.url.test(url) && (m.method || 'GET') === method
    )

    if (mockFile) {
      typeSplited[typeSplited.length - 1] = 'ENDED'
      return store.dispatch({
        ...action,
        type: typeSplited.join('>'),
        payload: mockFile.mock,
      })
    }
  }

  typeSplited[typeSplited.length - 1] = 'ERROR'
  return store.dispatch({
    ...action,
    type: typeSplited.join('>'),
  })
}

export const mocksListeners = [when(/^@@http\/.*>FAILED$/)(handleFailedRequest)]
