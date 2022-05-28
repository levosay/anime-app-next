import {useState} from 'react'
import {getAmountData} from 'api/anime'
import InfiniteScroll from "react-infinite-scroll-component";
import Card from 'ui/components/Card/Card'

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
      <Card
        cards={cards}
      />
    </InfiniteScroll>
  )
}

export default CardList


