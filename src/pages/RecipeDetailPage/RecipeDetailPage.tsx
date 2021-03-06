import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import RecipeDetail from 'containers/RecipeDetail/RecipeDetail';

import ArrowIcon from 'assets/arrow.svg';

import IconBack from 'styledComponents/IconBack';
import H2 from 'styledComponents/H2';

import { PageProps } from 'types'

const RecipeDetailPage: React.FC<PageProps<any>> = ({ title }) => (
  <React.Fragment>
    <H2 centered>
        <Link to="/">
          <IconBack src={ArrowIcon} alt="Back" />
        </Link>
        {title}
    </H2>
    <RecipeDetail/>
  </React.Fragment>
)

export default withRouter(RecipeDetailPage);
