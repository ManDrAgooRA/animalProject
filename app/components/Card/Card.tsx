import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { IMAGE_QALITY } from '@/app/constants'
import { ICatBreedDetail } from '@/app/interfaces/cat'
import { IDogBreedDetail } from '@/app/interfaces/dog'
import { getCurrentData } from '@/app/utils/getCurrentData'

interface ICard {
  imageId: string
  breedName: string
  isCatData: boolean
}

const Card = async ({ imageId, breedName, isCatData }: ICard) => {
  const animalType = isCatData ? 'cat' : 'dog'
  const data: ICatBreedDetail | IDogBreedDetail = await getCurrentData(
    imageId,
    animalType,
  )

  return (
    <div className='rounded-xl border-2 duration-300 hover:shadow-xl'>
      <Link href={`/breed/${isCatData ? 'cat' : 'dog'}/${imageId}`}>
        <div className='h-96 w-full'>
          <Image
            className='h-full w-full object-contain'
            src={data.url}
            alt={breedName}
            width={200}
            height={200}
            quality={IMAGE_QALITY}
          />
        </div>
        <p className='m-1'>Breed name - {breedName}</p>
        <p className='m-1'>Animal type - {isCatData ? 'Cat' : 'Dog'}</p>
      </Link>
    </div>
  )
}

export default Card
