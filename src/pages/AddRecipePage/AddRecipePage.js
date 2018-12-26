import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import getDBInstance from 'helpers/storage';
import ArrowIcon from 'assets/arrow.svg';

import AddRecipe from 'containers/AddRecipe/AddRecipe';

import H2 from 'styledComponents/H2';
import IconBack from 'styledComponents/IconBack';

class AddRecipePage extends Component {
  addNewRecipe = recipe => {
    const dbInstance = getDBInstance('recipes');
    dbInstance.add(recipe)
      .then(() => this.props.history.push('/'));;
  }

  render() {
    const { title } = this.props;
    return (
      <React.Fragment>
        <H2 centered>
          {title}
          <Link to="/">
            <IconBack src={ArrowIcon} alt="Back" />
          </Link>
        </H2>
        <AddRecipe action={this.addNewRecipe} />
      </React.Fragment>
      
    )
  }
}

AddRecipePage.propTypes = {
  title: PropTypes.string.isRequired
}

export default AddRecipePage;