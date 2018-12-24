import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import uuidv4 from 'uuid/v4';

import getDBInstance from 'helpers/storage';

import ArrowIcon from 'assets/arrow.svg';
import star from 'assets/star.svg';
import RecipesForm from 'components/RecipesForm/RecipesForm';

import H2 from 'elements/H2';
import IconBack from 'blocks/IconBack';

class AddEditRecipe extends Component {

  dbInstance = getDBInstance('recipes');
  recipeId = this.props.match.params.id;
  
  state = {
    title: '',
    description: '',
    recipe: null,
    fetching: true
  }

  componentDidMount() {
    if (this.recipeId) {
      this.getRecipe();
    }
  }

  getRecipe() {
    this.dbInstance.find(this.recipeId)
      .then(recipe => this.setState({
        recipe,
        fetching: false
      }));    
  }

  handleChange = ev => this.setState({
    [ev.target.name]: ev.target.value
  })

  editRecipe = recipe  =>
    this.dbInstance.edit(this.recipeId, recipe);

  addNewRecipe = recipe => this.dbInstance.add(recipe)

  handleSubmit = ev => {
    ev.preventDefault();

    const recipe = {
      id: uuidv4(),
      icon: star,
      title: this.state.title,
      description: this.state.description
    }

    const action = this.state.recipe 
      ? this.editRecipe(recipe) 
      : this.addNewRecipe(recipe)

    action.then(() => this.props.history.push('/'));
  }

  render() {
    if(this.recipeId && this.state.fetching) {
      return <p>Loading...</p>
    }

    const { title } = this.props;

    return (
      <div>
        <H2 centered>{title}
          <Link to="/">
            <IconBack src={ArrowIcon} alt="Back" />
          </Link>
        </H2>
        <RecipesForm 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          title={this.state.title}
          description={this.state.description}
          recipe={this.state.recipe}
        />
      </div>
    )
  }
}

AddEditRecipe.propTypes = {
  title: PropTypes.string.isRequired
}

export default AddEditRecipe;