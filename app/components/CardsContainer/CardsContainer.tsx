import React from 'react'

import { ICatBreed } from '@/app/interfaces/cat'
import { IDogBreed } from '@/app/interfaces/dog'

import Card from '../Card/Card'

interface ICardsContainer {
  data: IDogBreed[] | ICatBreed[]
  isCatData: boolean
}

const CardsContainer = ({ data, isCatData }: ICardsContainer) => {
  return (
    <div>
      <h4>{isCatData ? 'Cats' : 'Dogs'}</h4>
      {data.map((item) => {
        return (
          <Card
            key={item.name}
            imageId={item.reference_image_id}
            breedName={item.name}
            isCatData={isCatData}
          />
        )
      })}
    </div>
  )
}

export default CardsContainer
