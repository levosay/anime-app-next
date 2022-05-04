import PageHeader from '../../components/PageHeader/PageHeader'
import {Container} from './styled'

const MainLayout = ({ children }) => {
  return (
    <>
      <Container
        background={true}
        width={false}
      >
        <PageHeader />
      </Container>
      <Container
        width={true}
      >
        {children}
      </Container>
    </>
  )
}

export default MainLayout
