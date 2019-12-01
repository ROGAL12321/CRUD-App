import { useState, useEffect } from 'react';

import getDBInstance from 'helpers/storage';

import { Recipe } from 'types';

const useRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true)

  const saveRecipes = (recipes: Recipe[]) => {
    setRecipes(recipes);
    setLoading(false)
  }

  useEffect(() => {
    const { get } = getDBInstance('recipes');
    get().then(saveRecipes)
  }, [])

  return {recipes, loading}
}

export default useRecipes;
