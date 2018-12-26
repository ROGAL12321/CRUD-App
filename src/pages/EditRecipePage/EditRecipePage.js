import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import getDBInstance from 'helpers/storage';

import ArrowIcon from 'assets/arrow.svg';

import AddRecipe from 'containers/AddRecipe/AddRecipe';

import H2 from 'styledComponents/H2';
import IconBack from 'styledComponents/IconBack';

class EditRecipePage extends Component {
  state = {
    recipe: null,
    fetching: true
  }

  dbInstance = getDBInstance('recipes');
  recipeId = this.props.match.params.id;

  componentDidMount() {
    this.dbInstance.find(this.recipeId)
      .then(recipe => this.setState({
        recipe,
        fetching: false
      }));    
  }

  editRecipe = recipe  =>
    this.dbInstance.edit(this.recipeId, recipe)
      .then(() => this.props.history.push('/'));;

  render() {
    if(this.state.fetching) {
      return <p>Loading...</p>
    }

    const { title } = this.props;
    
    return (
      <React.Fragment>
        <H2 centered>
          {title}
          <Link to="/">
            <IconBack src={ArrowIcon} alt="Back" />
          </Link>
        </H2>
        <AddRecipe 
          action={this.editRecipe} 
          recipe={this.state.recipe} 
        />
      </React.Fragment>

    )
  }
}

EditRecipePage.propTypes = {
  title: PropTypes.string.isRequired
}

export default EditRecipePage;