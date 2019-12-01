import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import getDBInstance from 'helpers/storage';

import Button from 'styledComponents/Button';
import ButtonContainer from 'styledComponents/ButtonContainer';
import Title from 'styledComponents/Title';
import Description from 'styledComponents/Description';
import Icon from 'styledComponents/Icon'
import DetailContainer from 'styledComponents/DetailContainer'
import { Recipe } from 'types';

const RecipeDetail = ({ history, match }) => {
  const [recipe, setRecipe] = useState<Recipe>({})
  const [fetching, setFetching] = useState(true)

  const db = getDBInstance('recipes')
  const { id } = match.params

  const loadRecipe = () => {
    db.find(id).then(recipe => {
     setRecipe(recipe) ;
     setFetching(false);
    });
  }

  const deleteRecipe = () => {
    db.remove(recipe.id).then(() =>
      history.push('/')
    );
  }

  useEffect(loadRecipe, [])

  if(fetching) {
    return <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <DetailContainer>
        <Icon src={recipe.icon} alt="Recipe Icon"/>
        <Title>{recipe.title}</Title>
        <Description>{recipe.description}</Description>
      </DetailContainer>

      <ButtonContainer>
        <Link to={`/edit/${recipe.id}`}>
          <Button type="button">Edit</Button>
        </Link>
        <Button type="button" onClick={deleteRecipe}>Delete</Button>
      </ButtonContainer>
    </React.Fragment>
  );
}


export default withRouter(RecipeDetail);
