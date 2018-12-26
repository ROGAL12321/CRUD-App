import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from 'components/Navigation/Navigation';

import Container from 'styledComponents/Container';
import Header from 'styledComponents/Header';
import HeaderContainer from 'styledComponents/HeaderContainer';
import H1 from 'styledComponents/H1';

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
