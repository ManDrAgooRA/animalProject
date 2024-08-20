import { IDogBreedDetail } from '@/app/interfaces/dog'

export const DogDetail = ({ data }: { data: IDogBreedDetail }) => {
  const { name, bred_for, life_span, temperament, origin, weight, height } =
    data.breeds[0]

  const DOG_DETAIL = [
    { title: 'Name', value: name },
    { title: 'Live duration', value: life_span },
    { title: 'Temperament', value: temperament },
    { title: 'Vocation', value: bred_for },
    {
      title: 'Weight',
      value: `imperial - ${weight.imperial};  metric - ${weight.metric}`,
    },
    {
      title: 'Height',
      value: `imperial - ${height.imperial};  metric - ${height.metric}`,
    },
  ]

  return (
    <div className='col-span-4 p-4'>
      <h1 className='mb-4 text-5xl font-semibold'>{name}</h1>
      {DOG_DETAIL.map((item) => {
        return (
          <p className='mb-2 w-auto' key={item.title}>
            <span className='underline'>{item.title}</span> - {item.value}
          </p>
        )
      })}
    </div>
  )
}
