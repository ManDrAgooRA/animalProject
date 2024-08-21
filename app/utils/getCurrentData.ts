import { getCurrentCatBreedAPI } from '../api/cats'
import { getCurrentDogBreedAPI } from '../api/dogs'

export const getCurrentData = async (id: string, animalType: string) => {
  let currentData

  if (animalType === 'cat') {
    currentData = await getCurrentCatBreedAPI(id)
  } else {
    currentData = await getCurrentDogBreedAPI(id)
  }

  return currentData
}
