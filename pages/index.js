import CardList from 'ui/modules/CardList/CardList'
import {useState} from 'react'
import {initData} from 'api/anime'
import Meta from '@/Meta'

export default function Home(props) {
  const [data] = useState(props.data)

  return (
    <>
      <Meta />
      <CardList
        animeItems={data}
      />
    </>
  )
}

export const getStaticProps = async () => {
  const data = await initData()

  return {
    props: data
  }
}
