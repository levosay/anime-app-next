import PageHeader from '../../components/PageHeader/PageHeader'

const MainLayout = ({children}) => {
  return (
    <>
      <PageHeader />
      {children}
    </>
  )
}

export default MainLayout
