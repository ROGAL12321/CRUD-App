import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Button from 'styledComponents/Button';
import ButtonContainer from 'styledComponents/ButtonContainer';
import Title from 'styledComponents/Title';
import Description from 'styledComponents/Description';
import Icon from 'styledComponents/Icon'
import DetailContainer from 'styledComponents/DetailContainer'

import useRecipe from 'hooks/useRecipe';

const RecipeDetail = ({ history, match }) => {
  const { id } = match.params
  const { recipe, loading, remove } = useRecipe(id)

  const deleteRecipe = () => remove().then(() => history.push('/'));

  if(loading) {
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
