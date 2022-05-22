import MainLayout from '../../layouts/MainLayout'
import {useSelector} from 'react-redux'
import CardListFavorite from '../../components/CardListFavorite/CardListFavorite'
import Meta from '../../components/Meta'

const Favorite = () => {
  const favoriteList = useSelector(state => state.favorite)

  return (
    <MainLayout>
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
    </MainLayout>
  )
}

export default Favorite
