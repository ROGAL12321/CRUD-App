import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ShowMore from 'styledComponents/ShowMore';
import Icon from 'styledComponents/Icon';
import DescriptionContainer from 'styledComponents/DescriptionContainer';
import Title from 'styledComponents/Title';
import Description from 'styledComponents/Description';
import RecipeItem from 'styledComponents/RecipeItem';

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