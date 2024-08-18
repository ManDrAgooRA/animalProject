import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

interface ICard {
  imageId: string
  breedName: string
  isCatData: boolean
}

const Card = ({ imageId, breedName, isCatData }: ICard) => {
  return (
    <Link href={`/breed/${isCatData ? 'cat' : 'dog'}/${breedName}`}>
      {/* <Image src={imageId} alt={breedName} /> */}
      <p>Breed name - {breedName}</p>
    </Link>
  )
}

export default Card
