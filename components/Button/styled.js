import styled from 'styled-components'
import { PALETTE } from '../../constant/constants'

export const Btn = styled.button`
  min-width: 188px;
  text-decoration: none;
  padding: 10px 30px;
  position: relative;
  overflow: hidden;
  border: 2px solid ${PALETTE.primary};
  border-radius: 8px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  transition: 0.2s ease-in-out;
  background: ${PALETTE.lightPrimary};
  color: ${PALETTE.orange};

  &:before {
    content: "";
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.5));
    height: 50px;
    width: 50px;
    position: absolute;
    top: -8px;
    left: -75px;
    transform: skewX(-45deg);
  }
  
  &:hover {
    background: ${PALETTE.primary};
    color: ${PALETTE.white};
    cursor: pointer;
  }
  
  &:hover:before {
    left: 150px;
    transition: 0.5s ease-in-out;
  }
`

