import {CardItem, Img, Background, ButtonWrapper, CardFooter, CardTitle, CardWrapper} from './styled'
import Button from '../Button/Button'
import Link from 'next/link'


const CardList = ({ animeItems }) => {


  return (
    <CardWrapper>
      {animeItems.map(item => (
        <Link
          href={`/detailed/${item.id}`}
          passHref
          key={item.id}

        >
          <CardItem
            id={item.id}
          >

            <Background/>
            <Img src={item.attributes.posterImage.large} alt={item.attributes.canonicalTitle} />


            <CardFooter>
              <CardTitle>
                {item.attributes.canonicalTitle}
              </CardTitle>

              <ButtonWrapper>
                <Button>
                  UPDATE
                </Button>
              </ButtonWrapper>
            </CardFooter>
          </CardItem>
        </Link>
      ))}



    </CardWrapper>
  )
}


export default CardList


