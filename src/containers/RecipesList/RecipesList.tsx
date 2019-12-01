import React from 'react';
import { Recipe } from 'types';
import useRecipes from 'hooks/useRecipes';

import RecipesItem from 'components/RecipesItem/RecipesItem'

const RecipesList: React.FC = () => {
  const { recipes, loading } = useRecipes()

  if(loading) {
    return null;
  }

  return (
    <ul>
      {recipes.map((recipe: Recipe) => <RecipesItem key={recipe.id} {...recipe} />)}
    </ul>
  );
}

export default RecipesList;
