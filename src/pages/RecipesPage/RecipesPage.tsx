import React from 'react';

import RecipesList from 'containers/RecipesList/RecipesList';

import H2 from 'styledComponents/H2';

import { PageProps } from 'types'

const RecipesPage: React.FC<PageProps<any>> = ({ title }) => (
  <React.Fragment>
    <H2>{title}</H2>
    <RecipesList/>
  </React.Fragment>
)

export default RecipesPage;
