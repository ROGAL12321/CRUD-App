import React, { Component } from 'react';

import _ from 'lodash';
import uuidv4 from 'uuid/v4';

import star from 'assets/star.svg';
import RecipesForm from 'components/RecipesForm/RecipesForm';

class AddRecipe extends Component {

  state = {
    title: _.has(this.props.recipe, 'title') ? this.props.recipe.title : '',
    description: _.has(this.props.recipe, 'description')  ? this.props.recipe.description : '',
    errorMessage: null
  }

  handleChange = ev => this.setState({
    [ev.target.name]: ev.target.value
  })

  handleSubmit = ev => {
    ev.preventDefault();

    if(!this.state.title || !this.state.description)  {
      this.setState({
        errorMessage: 'Recipe name and description must be filled'
      })
    } else {
      const recipe = {
        id: uuidv4(),
        icon: star,
        title: this.state.title,
        description: this.state.description
      }
  
      this.props.action(recipe)
    }
  }

  render() {
    return (
      <RecipesForm 
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        title={this.state.title}
        description={this.state.description}
        errorMessage={this.state.errorMessage}
      />
    )
  }
}

export default AddRecipe;