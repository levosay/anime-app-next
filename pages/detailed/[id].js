import MainLayout from '../../layouts/MainLayout'
import getData from '../api'

const Detailed = (props) => {

  console.log('_-___----- ', props.data)
  return (
    <MainLayout>
      <h1>3213123</h1>
    </MainLayout>
  )
}
export const getStaticPaths = async ()  => {
  const {data} = await getData(process.env.NEXT_PUBLIC_FIRST_URL)

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
  if (!params) {
    return {
      notFound: true
    }
  } else {
    const data = await getData(`${process.env.NEXT_PUBLIC_FIND_URL}${params.id}`)
    return {
      props: data
    }
  }

}

export default Detailed
