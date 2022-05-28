import Description from 'ui/components/Description/Description'
import {FindData, initData} from 'api/anime'
import Meta from 'ui/components/Meta'

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
        ageRating={attributes.ageRating}
        averageRating={attributes.averageRating}
        title={attributes.canonicalTitle}
        img={
        attributes.posterImage.large
          ? attributes.posterImage.large
          : null
      }
        description={attributes.description}
        startDate={attributes.startDate}
        endDate={attributes.endDate}
        episodeCount={attributes.episodeCount}
        status={attributes.status}
        youtubeVideoId={attributes.youtubeVideoId}
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
    const {data} = await FindData(params.id)

    return {
      props: data
    }
  }
}

export default Detailed
