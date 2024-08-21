import { IDogBreed, IDogBreedDetail } from '../interfaces/dog'
import { ENDPOINTS } from './endpoints'
import { axiosDogInstance } from './instance'

export const getDogBreedsAPI = async (): Promise<IDogBreed[]> => {
  try {
    const { data } = await axiosDogInstance.get(
      `${ENDPOINTS.BREEDS}?limit=10&pag=0`,
    )

    return data
  } catch (error) {
    let message

    if (error instanceof Error) {
      message = `getDogBreedsAPI return error with message ${error.message}`
    }

    throw new Error(message)
  }
}

export const getCurrentDogBreedAPI = async (
  id: string,
): Promise<IDogBreedDetail> => {
  try {
    const { data } = await axiosDogInstance.get(`${ENDPOINTS.IMAGES}/${id}`)

    return data
  } catch (error) {
    let message

    if (error instanceof Error) {
      message = `getCurrentDogBreedAPI return error with message ${error.message}`
    }

    throw new Error(message)
  }
}
