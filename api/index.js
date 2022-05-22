import getData from './axios'
import getConfig from 'next/config'

export const {
  publicRuntimeConfig: { API_URL },
} = getConfig()


export const initData = async () => {
  return await getData(
    `${API_URL}?page%5Blimit%5D=20&page%5Boffset%5D=0`
  )
}

export const getAmountData = async (amount) => {
  const {data} = await getData(
    `${API_URL}?page%5Blimit%5D=20&page%5Boffset%5D=${amount}`
  )
  return data
}

export const FindData = async (amount) => {
  const {data} = await getData(
    `${API_URL}${amount}`
  )
  return data
}
