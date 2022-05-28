import React from 'react'
import ButtonFavorite from '../../modules/ButtonFavorite/ButtonFavorite'
import NavLink from '../NavLink/NavLink'

import {
  CardWrapper, Img, CardItem, CardTitle, CardFooter, Background
} from './styled'

const Card = ({cards}) => {
  return (
    <CardWrapper>
      {cards.map(item => (
        <NavLink
          key={item.id}
          href={`/detailed/${item.id}`}
        >
          <CardItem>
            <Background/>
            <Img
              src={item.attributes.posterImage.large}
              alt={item.attributes.canonicalTitle}
            />
            <CardFooter>
              <CardTitle>
                {item.attributes.canonicalTitle}
              </CardTitle>
              <ButtonFavorite
                id={item.id}
                title={item.attributes.canonicalTitle}
                src={item.attributes.posterImage.large}
              />
            </CardFooter>
          </CardItem>
        </NavLink>
      ))}
    </CardWrapper>
  )
}

export default Card
