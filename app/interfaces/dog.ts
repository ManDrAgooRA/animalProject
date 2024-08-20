import { ISize } from './cat'

export interface IDogBreed {
  id: number
  weight: ISize
  height: ISize
  name: string
  bred_for: string
  breed_group: string
  life_span: string
  temperament: string
  origin: string
  reference_image_id: string
}


export interface IDogBreedDetail {
  breeds: IDogBreed[]
  heigth: number;
  id: string;
  url: string;
  width: number;
}