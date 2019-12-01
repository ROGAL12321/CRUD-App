import { useState, useEffect } from 'react';

import getDBInstance from 'helpers/storage';

import { Recipe } from 'types';

const useRecipe = (id: string) => {
  const db = getDBInstance('recipes');

  const [recipe, setRecipe] = useState<Recipe>({});
  const [loading, setLoading] = useState<boolean>(true)

  const saveRecipe = (recipe: Recipe) => {
    setRecipe(recipe);
    setLoading(false)
  }

  const remove = () => db.remove(id)

  useEffect(() => { db.find(id).then(saveRecipe) }, [])

  return {recipe, loading, remove}
}

export default useRecipe;
