import { CardSkeleton } from "../CardSkeleton/CardSkeleton"

export const CardsContainerSkeleton = () => {
  return (
    <>
    <h4 className='m-6 h-7 w-auto rounded-md bg-gray-200'></h4>
    <div className='grid gap-4 mb-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
        <CardSkeleton/>
    </div>
  </>
  )
}
