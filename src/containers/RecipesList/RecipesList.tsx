import React, { useState, useEffect } from 'react';

import getDBInstance from 'helpers/storage';

import RecipesItem from 'common/components/RecipesItem/RecipesItem';

import { Recipe } from 'types';

const RecipesList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [fetching, setFetching] = useState<boolean>(true)

  const getRecipes = () => {
    const { get } = getDBInstance('recipes');

    get().then((recipes: Recipe[]) => {
      setRecipes(recipes);
      setFetching(false);
    })
  }

  useEffect(getRecipes, [])

  if(fetching) {
      return <p>Loading...</p>
  }

  return (
    <ul>
      {recipes.map(recipe => <RecipesItem key={recipe.id} {...recipe} />)}
    </ul>
  );
}

export default RecipesList;
