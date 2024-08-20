import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { getCurrentData } from '@/app/utils/getCurrentData'
import { IDogBreedDetail } from '@/app/interfaces/dog'
import { ICatBreedDetail } from '@/app/interfaces/cat'
import { IMAGE_QALITY } from '@/app/constants'

interface ICard {
  imageId: string
  breedName: string
  isCatData: boolean
}

const Card = async ({ imageId, breedName, isCatData }: ICard) => {
  const animalType = isCatData ? 'cat' : 'dog'
  const data: ICatBreedDetail | IDogBreedDetail = await getCurrentData(imageId, animalType);

  return (
    <div className='rounded border-2'>
      <Link href={`/breed/${isCatData ? 'cat' : 'dog'}/${imageId}`}>
        <div className='w-full h-96' >
          <Image className="object-contain w-full h-full" src={data.url} alt={breedName} width={200} height={200} quality={IMAGE_QALITY}/>
         </div>
        <p className='m-1'>Breed name - {breedName}</p>
        <p className='m-1'>Animal type  - {isCatData ? 'Cat' : 'Dog'}</p>
      </Link>
    </div>
  )
}

export default Card
