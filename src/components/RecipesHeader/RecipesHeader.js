import React from 'react';

import { Link } from 'react-router-dom';

import Navigation from 'components/Navigation/Navigation';

import Container from 'blocks/Container';
import Header from 'blocks/Header';
import HeaderContainer from 'blocks/HeaderContainer';

import H1 from 'elements/H1';

const RecipesHeader = () => (
  <Header>
    <Container>
      <HeaderContainer>
        <Link to="/">
          <H1>Crud App</H1>
        </Link>
        <Navigation />
      </HeaderContainer>
    </Container>
  </Header>
);
  
export default RecipesHeader;
