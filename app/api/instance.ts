import axios from 'axios'

const VERSION = 'v1'

export const axiosDogInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_DOG_BREEDS_API}/${VERSION}`,
  headers: {
    common: {
      Accept: 'application/json',
    },
  },
  responseType: 'json',
})

export const axiosCatInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_CAT_BREEDS_API}/${VERSION}`,
  headers: {
    common: {
      Accept: 'application/json',
    },
  },
  responseType: 'json',
})
