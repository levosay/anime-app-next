import Link from 'next/link'
import {useState} from 'react'
import {getAmountData} from 'api/anime'
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite'


import InfiniteScroll from "react-infinite-scroll-component";

import {
  CardItem, Img, Background, CardFooter, CardTitle, CardWrapper
} from './styled'

const CardList = ({ animeItems }) => {
  const [cards, setCards] = useState(animeItems)

  const getMorePost = async () => {
    const {data} = await getAmountData(cards.length)

    setCards((post) => [...post, ...data])
  }

  return (
    <InfiniteScroll
      next={getMorePost}
      dataLength={cards.length}
      hasMore={true}
      loader={<h3> Loading...</h3>}
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
                <ButtonFavorite
                  id={item.id}
                  title={item.attributes.canonicalTitle}
                  src={item.attributes.posterImage.large}
                />
              </CardFooter>
            </CardItem>
          </Link>
        ))}
      </CardWrapper>
    </InfiniteScroll>
  )
}

export default CardList


