import Head from 'next/head'
import MainLayout from '../layouts/MainLayout'
import CardList from '../components/CardList/CardList'
import {useState} from 'react'
import {initData} from '../api'
import Meta from '../components/Meta'


export default function Home(props) {
  const [data] = useState(props.data)

  return (
    <MainLayout>
      <Meta />
      <CardList
        animeItems={data}
      />
    </MainLayout>
  )
}

export const getStaticProps = async () => {
  const data = await initData()

  return {
    props: data
  }
}
