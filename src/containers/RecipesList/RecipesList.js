import React, { Component } from 'react';

import getDBInstance from 'helpers/storage';

import RecipesItem from 'components/RecipesItem/RecipesItem';

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
    if(this.state.fetching) {
        return <p>Loading...</p>
    }

    return (                
      <ul>
        {this.state.recipes.map(recipe => 
          <RecipesItem key={recipe.id} {...recipe} />
        )}
      </ul>
    );    
  }
}

export default RecipesList;
