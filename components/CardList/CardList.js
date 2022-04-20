import {CardItem, Img, Background, CardFooter, CardTitle, CardWrapper} from './styled'
import Button from '../Button/Button'
import Link from 'next/link'
import InfiniteScroll from "react-infinite-scroll-component";
import {useState} from 'react'
import getData from '../../pages/api'


const CardList = ({ animeItems }) => {
  const [cards, setCards] = useState(animeItems)
  const [hasMore, setHasMore] = useState(true)

  const getMorePost = async () => {
    const {data} = await getData(
      process.env.NEXT_PUBLIC_FIRST_URL + cards.length
    )
    setCards((post) => [...post, ...data])
  }

  return (
    <InfiniteScroll
      next={getMorePost}
      dataLength={cards.length}
      hasMore={hasMore}
      loader={<h3> Loading...</h3>}
      endMessage={<div>Nothing more to show</div>}
    >
      <CardWrapper>
        {cards.map(item => (
          <Link
            key={item.attributes.canonicalTitle}
            href={`/detailed/${item.id}`}
            passHref
          >
            <CardItem>

              <Background/>
              <Img
                src={item.attributes.posterImage.large}
                alt={item.attributes.canonicalTitle}
              />


              <CardFooter>
                <CardTitle>
                  {item.attributes.canonicalTitle}
                </CardTitle>

                <Button>
                  UPDATE
                </Button>
              </CardFooter>
            </CardItem>
          </Link>
        ))}

      </CardWrapper>
    </InfiniteScroll>

  )
}


export default CardList


