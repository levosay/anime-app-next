import styled from 'styled-components'
import {PALETTE} from '../../constant/constants'

export const Container = styled.div`
  //max-width: 1200px;
  ${props => props.width ? 'max-width: 1200px' : null};
  width: 100%;
  margin: 0 auto;
  padding: 40px 40px;
  ${props => props.background ? `background: ${PALETTE.lightPrimary}` : null};
`
