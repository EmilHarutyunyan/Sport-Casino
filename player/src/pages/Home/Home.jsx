import React from 'react'

import Subheading from '../../components/Subheading';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import { Container, Wrapper } from './Home.styles';
import GamesItem from '../../components/GamesItem/GamesItem';
import { casinoGames, partnersData, popularGames } from './gameData';
import Partners from '../../components/Partners/Partners';
import FooterHome from '../../components/FooterHome/FooterHome';

const Home = () => {
  return (
    <Wrapper>
      <Subheading />
      <HeroBanner />
      <Container>
        <GamesItem title={"Popular Games"} games={popularGames} />
        <GamesItem title={"Casino"} games={casinoGames} />
        <GamesItem title={"Other Games"} games={popularGames} />
        <Partners title={"Our Game Partners"} partners={partnersData} />
        <FooterHome />
        
      </Container>
    </Wrapper>
  );
}

export default Home