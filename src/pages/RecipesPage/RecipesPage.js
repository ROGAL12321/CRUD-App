import React from 'react';
import PropTypes from 'prop-types';

import RecipesList from 'containers/RecipesList/RecipesList';

import H2 from 'styledComponents/H2';

const RecipesPage = ({title}) => (
  <React.Fragment>
    <H2>{title}</H2>
    <RecipesList/>
  </React.Fragment>
)


RecipesPage.propTypes = {
  title: PropTypes.string.isRequired
}

export default RecipesPage;