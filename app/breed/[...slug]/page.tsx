import React from 'react'
import Image from 'next/image';
import { ICatBreedDetail } from '@/app/interfaces/cat';
import { IDogBreedDetail } from '@/app/interfaces/dog';
import { getCurrentData } from '@/app/utils/getCurrentData';
import { IMAGE_QALITY } from '@/app/constants';

const BreedPage = async ({ params }: { params: {slug: string[]} }) => {
  const id = params.slug[1];
  const animalType = params.slug[0];

  const data: ICatBreedDetail | IDogBreedDetail = await getCurrentData(id, animalType);

  return (
    <div>
      <Image src={data.url} alt={data.breeds[0].name} width={400} height={400} quality={IMAGE_QALITY}></Image>
      <p>Name - {data.breeds[0].name}</p>
    </div>
  )
}

export default BreedPage
