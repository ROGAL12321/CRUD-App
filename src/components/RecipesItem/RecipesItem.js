import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import ShowMore from 'blocks/ShowMore';
import Icon from 'blocks/Icon';
import DescriptionContainer from 'blocks/DescriptionContainer';
import Title from 'blocks/Title';
import Description from 'blocks/Description';
import RecipeItem from 'blocks/RecipeItem';

const RecipesItem = ({ id, icon, title, description }) => {
  return (
    <RecipeItem>
      <Icon src={icon} alt="Recipe"/>
      <DescriptionContainer>
        <Title>{title}</Title>
        <Description>
          {
            description.length > 30 
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
}

RecipesItem.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default RecipesItem