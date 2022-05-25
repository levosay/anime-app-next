import styled from 'styled-components'
import {PALETTE} from '../../../constant/constants'

export const DescWrap = styled.div`
  display: flex;
`

export const DescFace = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 42px;
`

export const DescInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const DescImgWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 353px;
  overflow: hidden;
  margin-bottom: 24px;
  border-radius: 10px;
  box-shadow: 0 10px 13px -7px #000, 5px 5px 15px 5px rgb(0 0 0 / 0%);
`

export const DescImg = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
`

export const DescLable = styled.span`
  position: absolute;
  top: 10px;
  ${props => props.side}
  padding: 4px 12px;
  background: red;
  border-radius: 10px;
  box-shadow: 0 10px 13px -7px #000, 5px 5px 15px 5px rgb(0 0 0 / 0%);
  color: ${props => props.color || '#fff'};
  font-size: 24px;
  font-weight: bold;
  z-index: 4;
`

export const DescTitle = styled.h2`
  font-size: 44px;
  text-align: center;
  margin-bottom: 24px;
`

export const DescText = styled.p`
  font-size: 24px;
`

export const DescSpan = styled.span`
  width: max-content;
  margin: 0 auto 24px;
  padding: 8px 16px;
  border-bottom: 1px solid rebeccapurple;
  font-size: 18px;
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
