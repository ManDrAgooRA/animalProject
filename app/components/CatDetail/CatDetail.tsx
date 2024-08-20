import { ICatBreedDetail } from '@/app/interfaces/cat'

export const CatDetail = ({ data }: { data: ICatBreedDetail }) => {
  const {
    name,
    life_span,
    temperament,
    origin,
    weight,
    vocalisation,
    energy_level,
    child_friendly,
    dog_friendly,
    description,
  } = data.breeds[0]

  const CAT_DETAIL = [
    { title: 'Name', value: name },
    { title: 'Live duration', value: life_span },
    { title: 'Meow level', value: vocalisation },
    { title: 'Temperament', value: temperament },
    { title: 'Energy', value: energy_level },
    { title: 'Child friendly', value: child_friendly },
    { title: 'Dog friendly', value: dog_friendly },
    { title: 'Origin', value: origin },
    {
      title: 'Weight',
      value: `imperial - ${weight.imperial};  metric - ${weight.metric}`,
    },
    { title: 'Description', value: description },
  ]

  return (
    <div className='col-span-4 p-4'>
      <h1 className='mb-4 text-5xl font-semibold'>{name}</h1>
      {CAT_DETAIL.map((item) => {
        return (
          <p className='mb-2 w-auto' key={item.title}>
            <span className='underline'>{item.title}</span> - {item.value}
          </p>
        )
      })}
    </div>
  )
}
