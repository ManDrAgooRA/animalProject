import React from 'react'

export const CardSkeleton = () => {
  return (
    <div className='rounded border-2'>
      <div className='h-96 w-full bg-gray-100 p-2 shadow-sm'></div>
      <div className='m-1 h-7 w-auto rounded-md bg-gray-200'></div>
      <div className='m-1 h-7 w-auto rounded-md bg-gray-200'></div>
    </div>
  )
}
