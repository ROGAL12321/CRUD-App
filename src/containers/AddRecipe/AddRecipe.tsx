import React, { useState } from 'react';

import uuidv4 from 'uuid/v4';

import star from 'assets/star.svg';
import RecipesForm from 'common/components/RecipesForm/RecipesForm';
import { Recipe } from 'types';

interface IProps {
  recipe?: Recipe;
  action: (r: Recipe) => void;
}

const AddRecipe: React.FC<IProps> = ({ action, recipe }) => {
  const getRecipeKey = (key: string) => recipe && recipe[key] ? recipe[key] : '';

  const [title, setTitle] = useState<string>(getRecipeKey('title'))
  const [description, setDescription] = useState<string>(getRecipeKey('description'))
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
   if(ev.target.name === 'title')  {
     setTitle(ev.target.value)
   }
   if(ev.target.name === 'description') {
     setDescription(ev.target.value)
   }
  }

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if(!title || !description)  {
      setErrorMessage('Recipe name and description must be filled')
      return;
    }

    const recipe: Recipe = {
      id: uuidv4(),
      icon: star,
      title,
      description
    }

    action && action(recipe)
  }


  return (
    <RecipesForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      title={title}
      description={description}
      errorMessage={errorMessage}
    />
  )
}

export default AddRecipe;
