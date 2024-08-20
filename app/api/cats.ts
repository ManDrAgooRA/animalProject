import { ICatBreed, ICatBreedDetail } from '../interfaces/cat'
import { ENDPOINTS } from './endpoints'
import { axiosCatInstance } from './instance'

export const getCatBreedsAPI = async (): Promise<ICatBreed[]> => {
  const { data } = await axiosCatInstance.get(
    `${ENDPOINTS.BREEDS}?limit=10&pag=0`,
  )

  return data
}

export const getCurrentCatBreedAPI = async (
  id: string,
): Promise<ICatBreedDetail> => {
  const { data } = await axiosCatInstance.get(`${ENDPOINTS.IMAGES}/${id}`)

  return data
}
