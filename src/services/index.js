import ADRequest from './request/index'

export function getPowerScreenData() {
  return ADRequest.get({
    url: '/powerscreen',
  })
}
