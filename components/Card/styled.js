import styled from 'styled-components'
import {PALETTE} from '../../constant/constants'

export const ImgWrapper = styled.div`
  position: relative;
  width: ${props => props.width || 250}px;
  height: ${props => props.height || 380}px;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  -webkit-box-shadow: 5px 5px 8px 0 rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 5px 5px 8px 0 rgba(34, 60, 80, 0.2);
  box-shadow: 5px 5px 8px 0 rgba(34, 60, 80, 0.2);
  
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 124ms linear, transform 124ms linear;
`



export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  transition: .2s;

  &:hover {
    background: ${PALETTE.midBlue};
    
    & ${Img} {
      opacity: 0.9;
      transform: scale(1.05);
    }
  }
`

export const Link = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
`

export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: auto;
  width: 100%;
  display: flex;
  justify-content: center;

`


