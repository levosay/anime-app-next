import MainLayout from '../layouts/MainLayout'
import Meta from '../components/Meta'

export default function Custom404() {
  return (

    <MainLayout>
      <Meta
        meta={{
          title: '404',
        }}
      />
      такой страницы нет
    </MainLayout>
  )
}
