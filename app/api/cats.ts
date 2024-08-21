import { ICatBreed, ICatBreedDetail } from '../interfaces/cat'
import { ENDPOINTS } from './endpoints'
import { axiosCatInstance } from './instance'

export const getCatBreedsAPI = async (): Promise<ICatBreed[]> => {
  try {
    const { data } = await axiosCatInstance.get(
      `${ENDPOINTS.BREEDS}?limit=10&pag=0`,
    )

    return data
  } catch (error) {
    let message

    if (error instanceof Error) {
      message = `getCatBreedsAPI return error with message ${error.message}`
    }

    throw new Error(message)
  }
}

export const getCurrentCatBreedAPI = async (
  id: string,
): Promise<ICatBreedDetail> => {
  try {
    const { data } = await axiosCatInstance.get(`${ENDPOINTS.IMAGES}/${id}`)

    return data
  } catch (error) {
    let message

    if (error instanceof Error) {
      message = `getCurrentCatBreedAPI return error with message ${error.message}`
    }

    throw new Error(message)
  }
}
