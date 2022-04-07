import {CardItem, Img, CardLink, Background, ButtonWrapper, CardFooter, CardTitle} from './styled'
import Button from '../Button/Button'
import Link from 'next/link'


const Card = ({width}) => {
  return (

    <CardItem width={width}>
      <Link href="/detailed">
        <Background/>
      </Link>

      <CardLink>
        <Img src='https://scientificrussia.ru/images/b/teb-full.jpg' alt="123123" />
      </CardLink>

      <CardFooter>
        <Link href="/detailed">
          <CardTitle>
            Lorem ipsum dolor sit amet.
          </CardTitle>
        </Link>

        <ButtonWrapper>
          <Button>
            UPDATE
          </Button>
        </ButtonWrapper>
      </CardFooter>
    </CardItem>
  )
}

export default Card
