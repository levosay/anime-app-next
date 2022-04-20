import MainLayout from '../../layouts/MainLayout'
import getData from '../api'
import getConfig from 'next/config';
import {DetailedDescription, DetailedInfo, Progress, ProgressLine} from './styled'
import Description from '../../components/Description/Description'

export const {publicRuntimeConfig: { FIRST_URL, FIND_URL }} = getConfig();

const Detailed = (props) => {
  console.log('props ', props)


  return (
    <MainLayout>
      <Description
        ageRating={props.attributes.ageRating}
        averageRating={props.attributes.averageRating}
        title={props.attributes.canonicalTitle}
        img={props.attributes.posterImage.large
          ? props.attributes.posterImage.large
          : null}

        description={props.attributes.description}
        startDate={props.attributes.startDate}
        endDate={props.attributes.endDate}
        episodeCount={props.attributes.episodeCount}
        status={props.attributes.status}
        youtubeVideoId={props.attributes.youtubeVideoId}
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
