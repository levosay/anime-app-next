import {
  DescFace, DescImg, DescImgWrap, DescInfo, DescLable, DescSpan, DescText, DescTitle, DescWrap
} from './styled'
import Button from '../Button/Button'
import {Progress, ProgressLine} from '../../pages/detailed/styled'

const Description = ({
  ageRating, averageRating, title, img, description,
  startDate, endDate, status, id
}) => {
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

  return (
    <DescWrap>
      <DescFace>
        <DescImgWrap>
          <DescLable
            side={'left: 10px;'}
            color={'darkred'}
          >
            {status}
          </DescLable>
          <DescLable
            side={'right: 10px;'}
          >
            {ageRating}
          </DescLable>
          <DescImg
            src={img}
          />
          {drawRating(averageRating)}
        </DescImgWrap>
        <DescSpan>
          {startDate} - {endDate}
        </DescSpan>
        <Button
          id={id}
          title={title}
          src={img}
        />
      </DescFace>
      <DescInfo>
        <DescTitle>
          {title}
        </DescTitle>
        <DescText>
          {description}
        </DescText>
      </DescInfo>
    </DescWrap>
  )
}

export default Description
