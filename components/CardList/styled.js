import styled from 'styled-components'
import {PALETTE} from '../../constant/constants'

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .15s linear;
`

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity .15s ease-in;
  background: ${PALETTE.midBlue};
  opacity: 0;
`

export const CardFooter = styled.div`
  display: flex;
  position: absolute;
  bottom: 28px;
  left: 0;
  right: 0;
  flex-direction: column;
  align-items: center;
  padding: 0 18px;
  transition: opacity .15s ease-in;
  opacity: 0;
  z-index: 3;
`

export const CardItem = styled.div`
  position: relative;
  width: ${props => props.width || 250}px;
  height: ${props => props.height || 380}px;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  -webkit-box-shadow: 5px 5px 8px 0 rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 5px 5px 8px 0 rgba(34, 60, 80, 0.2);
  box-shadow: 5px 5px 8px 0 rgba(34, 60, 80, 0.2);
  margin: auto;

  &:hover {
    ${CardFooter} {
      opacity: 1;
    }
    
    ${Background} {
      opacity: 0.4;
      z-index: 2;
    }
    
    ${Img} {
      transform: scale(1.05);
    }
  }
`

export const CardLink = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`



export const CardTitle = styled.h4`
  text-align: center;
  font-size: 30px;
  line-height: 120%;
  color: #F0F8FF;
  text-shadow: -1px -1px 1px rgba(255, 255, 255, 0.1), 1px 1px 1px rgba(0, 0, 0, 0.5);
  margin-bottom: 24px;
`




