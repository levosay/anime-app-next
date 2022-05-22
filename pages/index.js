import CardList from 'components/CardList/CardList'
import {useState} from 'react'
import {initData} from 'api'
import Meta from 'components/Meta'


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
