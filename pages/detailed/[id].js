import MainLayout from '../../layouts/MainLayout'
import getData from '../api'
import getConfig from 'next/config';

export const {publicRuntimeConfig: { FIRST_URL, FIND_URL }} = getConfig();

const Detailed = (props) => {

  // console.log('_-___----- ', props.data)
  return (
    <MainLayout>
      <h1>DETAIL</h1>
      <h1>{props.data.attributes.canonicalTitle}</h1>
    </MainLayout>
  )
}

export const getStaticPaths = async ({ params })  => {
  const { data } = await getData(FIRST_URL.toString())

  console.log('params1 ', params)

  const paths = data.map((item) => {
    return {
      params: {
        id: item.id
      }
    }
  });

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {

  console.log('params2 ', params)

  if (!params) {
    return {
      notFound: true
    }
  } else {
    const data = await getData(`${FIND_URL}${params.id}`)
    return {
      props: data
    }
  }

}

export default Detailed
