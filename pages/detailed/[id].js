import MainLayout from '../../layouts/MainLayout'
import getData from '../api'
import getConfig from 'next/config';
import Description from '../../components/Description/Description'

export const {publicRuntimeConfig: { FIRST_URL, FIND_URL }} = getConfig();

const Detailed = ({id, attributes}) => {
  return (
    <MainLayout>
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
    </MainLayout>
  )
}

export const getStaticPaths = async ()  => {
  const { data } = await getData(FIRST_URL.toString())

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
    const { data } = await getData(`${FIND_URL}${params.id}`)

    return {
      props: data
    }
  }
}

export default Detailed
