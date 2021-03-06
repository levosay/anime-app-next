import PageHeader from 'ui/components/PageHeader/PageHeader'
import {Container} from './styled'

const MainLayout = ({ children }) => {
  return (
    <>
      <PageHeader />
      <Container
      >
        {children}
      </Container>
    </>
  )
}

export default MainLayout
