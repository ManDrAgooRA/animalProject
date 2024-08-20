import React from 'react'

import Image from 'next/image'

import { IMAGE_QALITY } from '@/app/constants'
import { ICatBreedDetail } from '@/app/interfaces/cat'
import { IDogBreedDetail } from '@/app/interfaces/dog'
import { getCurrentData } from '@/app/utils/getCurrentData'

import { CatDetail } from '@/app/components/CatDetail/CatDetail'
import { DogDetail } from '@/app/components/DogDetail/DogDetail'

const BreedPage = async ({ params }: { params: { slug: string[] } }) => {
  const id = params.slug[1]
  const animalType = params.slug[0]

  const data: ICatBreedDetail | IDogBreedDetail = await getCurrentData(
    id,
    animalType,
  )

  return (
    <div className='grid gap-4 p-4 md:grid-cols-6'>
      <div className='col-span-2 h-96 w-auto border-2'>
        <Image
          className='h-full w-full object-contain'
          src={data.url}
          alt={data.breeds[0].name}
          width={400}
          height={400}
          quality={IMAGE_QALITY}
        ></Image>
      </div>
      {animalType === 'cat' ? (
        <CatDetail data={data as ICatBreedDetail} />
      ) : (
        <DogDetail data={data as IDogBreedDetail} />
      )}
    </div>
  )
}

export default BreedPage
