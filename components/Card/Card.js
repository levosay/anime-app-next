import React from 'react'
import {ImgWrapper, Img, Link, Background, ButtonWrapper} from './styled'
import Button from '../Button/Button'

const Card = ({width}) => {
  return (
    <ImgWrapper width={width}>
      <Background/>
      <Link>
        <Img src='https://scientificrussia.ru/images/b/teb-full.jpg' alt="123123" />
      </Link>
      <ButtonWrapper>
        <Button>
          Добавить
        </Button>
      </ButtonWrapper>
    </ImgWrapper>
  )
}

export default Card
