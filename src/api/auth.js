import request from '@/utils/request'
import {fakeSuccessResponse} from '@/utils/fake-response'
import GlobalConstants from '@/global-constants'
const UseBackend = GlobalConstants.UseBackend

export function login (requestData) {
  if (!UseBackend) {
    return fakeLoginRequest(requestData)
  }
  return request({
    method: 'post',
    url: '/auth/login',
    data: requestData
  })
}

export function register (requestData) {
  if (!UseBackend) {
    return fakeRegisterRequest(requestData)
  }
  return request({
    method: 'post',
    url: '/auth/register',
    data: requestData
  })
}

function fakeLoginRequest (requestData) {
  return fakeSuccessResponse({
    username: requestData.username
  })
}

function fakeRegisterRequest (requestData) {
  return fakeSuccessResponse({
    username: requestData.username
  })
}
