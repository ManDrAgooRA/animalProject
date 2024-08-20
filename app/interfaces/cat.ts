export interface ISize {
  [key: string]: string
}

export interface ICatBreed {
  weight: ISize
  height?: ISize
  id: string
  name: string
  cfa_url: string
  vetstreet_url: string
  vcahospitals_url: string
  temperament: string
  origin: string
  country_codes: string
  country_code: string
  description: string
  life_span: string
  indoor: 0
  lap: 1
  alt_names: string
  adaptability: 5
  affection_level: 5
  child_friendly: 3
  dog_friendly: 4
  energy_level: 5
  grooming: 1
  health_issues: 2
  intelligence: 5
  shedding_level: 2
  social_needs: 5
  stranger_friendly: 5
  vocalisation: 1
  experimental: 0
  hairless: 0
  natural: 1
  rare: 0
  rex: 0
  suppressed_tail: 0
  short_legs: 0
  wikipedia_url: string
  hypoallergenic: 0
  reference_image_id: string
}

export interface ICatBreedDetail {
  breeds: ICatBreed[]
  heigth: number;
  id: string;
  url: string;
  width: number;
}
