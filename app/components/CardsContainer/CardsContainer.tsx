import React, { Suspense } from 'react'

import { ICatBreed } from '@/app/interfaces/cat'
import { IDogBreed } from '@/app/interfaces/dog'

import Card from '../Card/Card'
import { CardsContainerSkeleton } from '../Skeletons/CardsContainerSkeleton/CardsContainerSkeleton'
import { CardSkeleton } from '../Skeletons/CardSkeleton/CardSkeleton'

interface ICardsContainer {
  data: IDogBreed[] | ICatBreed[]
  isCatData: boolean
}

const CardsContainer = ({ data, isCatData }: ICardsContainer) => {
  return (
    <Suspense fallback={<CardsContainerSkeleton />}>
      <h2 className='my-8 text-5xl'>{isCatData ? 'Cats' : 'Dogs'}</h2>
      <div className='mb-6 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
        {data.map((item) => {
          return (
            <Suspense key={item.name} fallback={<CardSkeleton />}>
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
