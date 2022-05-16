import MainLayout from '../../layouts/MainLayout'
import {useSelector} from 'react-redux'
import CardListFavorite from '../../components/CardListFavorite/CardListFavorite'

const Favorite = () => {
  const favoriteList = useSelector(state => state.favorite)

  return (
    <MainLayout>
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
