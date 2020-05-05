import request from '@/utils/request'
import {fakeSuccessResponse} from '@/utils/fake-response'
import GlobalConstants from '@/global-constants'
const UseBackend = GlobalConstants.UseBackend

export function getList (data) {
  if (!UseBackend) {
    return fakeGetListRequest(data)
  }
  return request({
    method: 'get',
    url: '/module1/list',
    data: data
  })
}

function fakeGetListRequest (data) {
  let pageNumber = data.pageNumber
  let pageSize = data.pageSize

  // 生成模拟的测试数据
  let allData = []
  let totalItemsNumber = 1000
  for (let i = 0; i < totalItemsNumber; i++) {
    allData.push({id: i, name: i})
  }
  let startIndex = (pageNumber - 1) * pageSize
  let endIndex = startIndex + pageSize
  let responseData = allData.slice(startIndex, endIndex)
  return fakeSuccessResponse({
    pageNumber: pageNumber,
    pageSize: pageSize,
    totalItemsNumber: totalItemsNumber,
    totalPagesNumber: Math.max(1, Math.ceil(totalItemsNumber / pageSize)),
    list: responseData
  })
}
