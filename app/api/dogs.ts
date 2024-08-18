import { IDogBreed } from '../interfaces/dog'
import { ENDPOINTS } from './endpoints'
import { axiosDogInstance } from './instance'

export const getDogBreedsAPI = async (): Promise<IDogBreed[]> => {
  const { data } = await axiosDogInstance.get(
    `${ENDPOINTS.BREEDS}?limit=10&pag=0`,
  )

  return data
}

export const getCurrentDogBreedAPI = async (id: number): Promise<IDogBreed> => {
  const { data } = await axiosDogInstance.get(`${ENDPOINTS.BREEDS}/${id}`)

  return data
}
