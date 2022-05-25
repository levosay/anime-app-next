import {useSelector} from 'react-redux'
import CardListFavorite from 'ui/modules/CardListFavorite/CardListFavorite'
import Meta from 'ui/components/Meta'

const Favorite = () => {
  const favoriteList = useSelector(state => state.favorite)

  return (
    <>
      <Meta
        meta={{
          title: 'Favorite',
        }}
      />
      {favoriteList.length
        ?
        <CardListFavorite
          animeItems={favoriteList}
          hasMoreFavorite={false}
        />
        :
        'список пуст'
      }
    </>
  )
}

export default Favorite
