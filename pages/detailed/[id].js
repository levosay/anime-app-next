import Description from '@/Description/Description'
import {findData, initData} from 'api/anime'
import Meta from '@/Meta'

const Detailed = ({id, attributes}) => {
  return (
    <>
      <Meta
        meta={{
          title: attributes.canonicalTitle,
        }}
      />
      <Description
        id={id}
        attributes={attributes}
      />
    </>
  )
}

export const getStaticPaths = async ()  => {
  const {data} = await initData()

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
    const {data} = await findData(params.id)

    return {
      props: data
    }
  }
}

export default Detailed
