import MainLayout from '../../layouts/MainLayout'
import {useActions} from '../../hooks/useActions'
import {useDispatch, useSelector} from 'react-redux'
import CardList from '../../components/CardList/CardList'

const Favorite = () => {
  const favoriteList = useSelector(state => state)
  const dispatch = useDispatch()
  const {setFavorite, removeFavorite} = useActions()

  console.log('favoriteList ', favoriteList)


  const test = () => {
    // setFavorite('123123')
    // removeFavorite('2')

  }




  // console.log('favoriteList ', favoriteList)
  return (
    <MainLayout>
      <h1 style={{cursor: 'pointer'}} onClick={test}>FAVORITE</h1>

      {favoriteList.length
        ?
        <CardList
          animeItems={favoriteList}
        />
        :
        'список пуст'
      }

    </MainLayout>
  )
}

export default Favorite
