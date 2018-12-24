import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getDBInstance from 'helpers/storage';

import RecipesItem from 'components/RecipesItem/RecipesItem';

import H2 from 'elements/H2';

class RecipesList extends Component {
  state = {
    recipes: [],
    fetching: true    
  }

  componentDidMount() {
    const { get } = getDBInstance('recipes');

    get()
      .then(recipes => this.setState({
          recipes,
          fetching: false
      }))
  }

  render() {
    const { title } = this.props;

    if(this.state.fetching) {
        return <p>Loading...</p>
    }

    return (                
      <React.Fragment>
        <H2>{title}</H2>
        <ul>
          {this.state.recipes.map(recipe => 
            <RecipesItem key={recipe.id} {...recipe} />
          )}
        </ul>
      </React.Fragment>
    );    
  }
}

RecipesList.propTypes = {
  title: PropTypes.string.isRequired
}

export default RecipesList;
