import React from 'react';
import { Link } from 'react-router-dom';

import getDBInstance from 'helpers/storage';
import ArrowIcon from 'assets/arrow.svg';

import AddRecipe from 'containers/AddRecipe/AddRecipe';

import H2 from 'styledComponents/H2';
import IconBack from 'styledComponents/IconBack';
import { PageProps } from 'types';

import { Recipe } from 'types'

const AddRecipePage: React.FC<PageProps<null>> = ({ title, history }) => {
  const addNewRecipe = (recipe: Recipe) => {
    const dbInstance = getDBInstance('recipes');
    dbInstance.add(recipe).then(() => history.push('/'));;
  }

  return (
    <React.Fragment>
      <H2 centered>
        {title}
        <Link to="/">
          <IconBack src={ArrowIcon} alt="Back" />
        </Link>
      </H2>
      <AddRecipe action={addNewRecipe} />
    </React.Fragment>
  )
}

export default AddRecipePage;
