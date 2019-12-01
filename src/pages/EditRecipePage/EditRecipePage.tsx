import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import getDBInstance from 'helpers/storage';

import ArrowIcon from 'assets/arrow.svg';

import AddRecipe from 'containers/AddRecipe/AddRecipe';

import H2 from 'styledComponents/H2';
import IconBack from 'styledComponents/IconBack';

import { PageProps, Recipe } from 'types';

type TParams = { id: number };

const EditRecipePage: React.FC<PageProps<TParams>> = ({ title, match, history }) =>  {
  const [recipe, setRecipe] = useState<Recipe>({});
  const [loading, setLoading] = useState<boolean>(true);

  const dbInstance = getDBInstance('recipes');
  const recipeId = match.params.id

  const loadRecipe = () => {
    dbInstance.find(recipeId)
      .then((recipe: Recipe) => {
        setRecipe(recipe);
        setLoading(false);
      });
  }

  const editRecipe = (recipe: Recipe)  => {
    dbInstance.edit(recipeId, recipe).then(() => {
      history.push('/');
    })
  }

  useEffect(loadRecipe, [])

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <H2 centered>
        {title}
        <Link to="/">
          <IconBack src={ArrowIcon} alt="Back" />
        </Link>
      </H2>

      <AddRecipe
        action={editRecipe}
        recipe={recipe}
      />
    </React.Fragment>
  )
}

export default EditRecipePage;
