export function fakeSuccessResponse (responseData) {
  return new Promise(resolve => {
    resolve({
      success: true,
      message: 'success',
      code: 200,
      data: responseData
    })
  })
}

export function fake400Response () {
  return new Promise(resolve => {
    resolve({
      success: false,
      message: 'bad request',
      code: 400,
      data: null
    })
  })
}
