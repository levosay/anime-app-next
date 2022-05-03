import {CardItem, Img, Background, CardFooter, CardTitle, CardWrapper} from './styled'
import Button from '../Button/Button'
import Link from 'next/link'
import InfiniteScroll from "react-infinite-scroll-component";
import {useEffect, useState} from 'react'
import getData from '../../pages/api'
import {useActions} from '../../hooks/useActions'
import {useSelector} from 'react-redux'


const CardList = ({ animeItems, hasMoreFavorite = true }) => {
  const favoriteList = useSelector(state => state.favorite)
  const {setFavorite, removeFavorite} =useActions()
  const [cards, setCards] = useState(animeItems)
  const [hasMore, setHasMore] = useState(hasMoreFavorite)

  const getMorePost = async () => {
    const {data} = await getData(
      process.env.NEXT_PUBLIC_FIRST_URL + cards.length
    )
    setCards((post) => [...post, ...data])
  }

  const isFavorite = (id) => {
    return favoriteList.some(item => item.id === id)
  }

  const addFavorite = (event, id, key, src, title) => {
    event.stopPropagation()
    setFavorite({
      id: id,
      attributes: {
        canonicalTitle: title,
        posterImage: {
          large: src,
        }
      },
    })
  }

  const remFavorite = (event, id) => {
    event.stopPropagation()
    removeFavorite(id)
  }

  useEffect(() => {
    setCards(animeItems)
  }, [favoriteList])

  return (
    <InfiniteScroll
      next={getMorePost}
      dataLength={cards.length}
      hasMore={hasMore}
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
                <Button
                  onClick={(e) =>  isFavorite(item.id) ?
                    remFavorite(e, item.id)
                    :
                    addFavorite(
                    e,
                    item.id,
                    item.attributes.canonicalTitle,
                    item.attributes.posterImage.large,
                    item.attributes.canonicalTitle,
                  )}
                >
                  {isFavorite(item.id) ? 'Remove' : 'Add to favorites'}
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


