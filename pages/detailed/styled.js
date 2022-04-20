import styled from 'styled-components'
import {PALETTE} from '../../constant/constants'

export const Detailed = styled.div`
  display: flex;
  
`

export const DetailedInfo = styled.div`
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
`

export const DetailedDescription = styled.div`
  display: flex;
  flex-direction: column;
`

export const Progress = styled.div`
  margin: auto;
  width: 100%;
  height: 20px;
  background-color: ${PALETTE.lightPrimary};
`

export const ProgressLine = styled.div`
  width: ${props => props.width};
  display: flex;
  height: 100%;
  background-color: ${PALETTE.primary};
  color: ${PALETTE.white};
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`
