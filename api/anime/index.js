import makeRequest from '../index'

export const initData = async () => {
  return await makeRequest({
    method: 'GET',
    url: `/?page%5Blimit%5D=20&page%5Boffset%5D=0`
  })
}

export const getAmountData = async (amount) => {
  return await makeRequest({
    method: 'GET',
    url: `/?page%5Blimit%5D=20&page%5Boffset%5D=${amount}`
  })
}

export const findData = async (amount) => {
  return await makeRequest({
    method: 'GET',
    url: `/${amount}`
  })
}
