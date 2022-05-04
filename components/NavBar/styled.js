import styled from 'styled-components'

export const Nav = styled.div`
  display: flex;
  align-items: center;
`

export const LogoIcon = styled.img`
  width: 100px;
  margin-right: 100px;
`

export const NavLink = styled.span`
  font-size: 38px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 1px 1px 3px #666;
  //color: #f5f5f7;
  color: ${props => props.color || '#f5f5f7'};
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 50px;
  }
  
  &:hover {
    color: rebeccapurple;
  }
`
