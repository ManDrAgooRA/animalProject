import { getCatBreedsAPI } from './api/cats'
import { getDogBreedsAPI } from './api/dogs'
import CardsContainer from './components/CardsContainer/CardsContainer'

export default async function Home() {
  const catsData = await getCatBreedsAPI()
  const dogsData = await getDogBreedsAPI()

  return (
    <main className='mx-4'>
      <CardsContainer data={catsData} isCatData />
      <CardsContainer data={dogsData} isCatData={false} />
    </main>
  )
}
