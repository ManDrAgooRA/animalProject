import React from 'react'

export const CardSkeleton = () => {
  return (
    <div className='rounded border-2'>
      <div className='w-full h-96 bg-gray-100 p-2 shadow-sm'></div>
      <div className='h-7 m-1 w-auto rounded-md bg-gray-200'></div>
      <div className='h-7 m-1 w-auto rounded-md bg-gray-200'></div>
    </div>
  )
}
