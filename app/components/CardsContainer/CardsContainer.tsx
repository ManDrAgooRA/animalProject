import React, { Suspense } from 'react'

import { ICatBreed } from '@/app/interfaces/cat'
import { IDogBreed } from '@/app/interfaces/dog'
import { CardSkeleton } from '../Skeletons/CardSkeleton/CardSkeleton'
import Card from '../Card/Card'
import { CardsContainerSkeleton } from '../Skeletons/CardsContainerSkeleton/CardsContainerSkeleton'

interface ICardsContainer {
  data: IDogBreed[] | ICatBreed[]
  isCatData: boolean
}

const CardsContainer = ({ data, isCatData }: ICardsContainer) => {
  return (
    <Suspense fallback={<CardsContainerSkeleton />}>
      <h4 className='m-6'>{isCatData ? 'Cats' : 'Dogs'}</h4>
      <div className='grid gap-4 mb-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
        {data.map((item) => {
          return (
            <Suspense key={item.name} fallback={<CardSkeleton/>}>
              <Card
                imageId={item.reference_image_id}
                breedName={item.name}
                isCatData={isCatData}
                />
            </Suspense>
            )
          })}
      </div>
    </Suspense>
  )
}

export default CardsContainer
