import MainLayout from '../../layouts/MainLayout'
import {useSelector} from 'react-redux'
import CardList from '../../components/CardList/CardList'

const Favorite = () => {
  const favoriteList = useSelector(state => state.favorite)

  return (
    <MainLayout>
      <h1>FAVORITE</h1>
      {favoriteList.length
        ?
        <CardList
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
