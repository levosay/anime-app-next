import ButtonFavorite from '../../modules/ButtonFavorite/ButtonFavorite'

import {
  DescFace, DescImg, DescImgWrap, DescInfo,
  DescLable, DescSpan, DescText, DescTitle,
  DescWrap, Progress, ProgressLine
} from './styled'

const Description = ({id, attributes}) => {
  const drawRating = (value = 50) => {
    const roundedValue = `${Math.floor(value)}%`

    return (
      <Progress>
        <ProgressLine
          width={roundedValue}
        >
          {roundedValue}
        </ProgressLine>
      </Progress>
    )
  }

  const isLogo = () => {
    if (attributes.posterImage.large) {
      return attributes.posterImage.large
    } else {
      return null
    }
  }

  return (
    <DescWrap>
      <DescFace>
        <DescImgWrap>
          <DescLable
            side={'left: 10px;'}
            color={'darkred'}
          >
            {attributes.status}
          </DescLable>
          <DescLable
            side={'right: 10px;'}
          >
            {attributes.ageRating}
          </DescLable>
          <DescImg
            src={isLogo()}
          />
          {drawRating(attributes.averageRating)}
        </DescImgWrap>
        <DescSpan>
          {attributes.startDate} - {attributes.endDate}
        </DescSpan>
        <ButtonFavorite
          id={id}
          title={attributes.canonicalTitle}
          src={isLogo()}
        />
      </DescFace>
      <DescInfo>
        <DescTitle>
          {attributes.canonicalTitle}
        </DescTitle>
        <DescText>
          {attributes.description}
        </DescText>
      </DescInfo>
    </DescWrap>
  )
}

export default Description
