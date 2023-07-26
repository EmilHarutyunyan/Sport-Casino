import React from 'react'
// Styles
import {Item, Items, Wrapper} from "./GamesItem.styles"
import { Link } from 'react-router-dom'

const GameItem = ({game}) => {
  
  return (
    <Link to={game.url}>
      <img src={game.img} alt={game.name} />
    </Link>
  );
}

const GamesItem = ({title,games}) => {
  return (
    <Wrapper className='main-container'>
      <h2>{title}</h2>
      <Items>
        {games.map((game) => {
          return <Item key={game.id}>
            <GameItem game={game} />
          </Item>
        })}
      </Items>
    </Wrapper>
  )
}

export default GamesItem