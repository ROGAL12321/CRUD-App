import React from 'react';
import { Link } from 'react-router-dom';

import ShowMore from 'styledComponents/ShowMore';
import Icon from 'styledComponents/Icon';
import DescriptionContainer from 'styledComponents/DescriptionContainer';
import Title from 'styledComponents/Title';
import Description from 'styledComponents/Description';
import RecipeItem from 'styledComponents/RecipeItem';

import { Recipe } from 'types'

const RecipesItem: React.FC<Recipe & { key: string | undefined; }> = ({ id, icon, title, description }) => (
  <RecipeItem>
    <Icon src={icon} alt="Recipe"/>
    <DescriptionContainer>
      <Title>{title}</Title>
      <Description>
        {
          description && description.length > 30
            ? `${description.slice(0, 30)} ...`
            : description
        }
        <Link to={`/recipe/${id}`}>
          <ShowMore> Show more </ShowMore>
        </Link>
      </Description>
    </DescriptionContainer>
  </RecipeItem>
)

export default RecipesItem
