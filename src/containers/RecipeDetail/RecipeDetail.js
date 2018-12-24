import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import getDBInstance from 'helpers/storage';

import ArrowIcon from 'assets/arrow.svg';

import Button from 'blocks/Button';
import ButtonContainer from 'blocks/ButtonContainer';
import Title from 'blocks/Title';
import Description from 'blocks/Description';
import IconBack from 'blocks/IconBack';
import Icon from 'blocks/Icon'
import DetailContainer from 'blocks/DetailContainer'

import H2 from 'elements/H2';

class RecipeDetail extends Component {
 
  state = {
    recipe: null,
    fetching: true
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { find } = getDBInstance('recipes');

    find(id).then(recipe => this.setState({
      recipe,
      fetching: false
    })); 
  }

  deteleRecipe = () => {
    const db = getDBInstance('recipes');

    db.remove(this.state.recipe.id).then(() => 
      this.props.history.push('/')
    ); 
  }

  render() {
    if(this.state.fetching) {
      return <p>Loading...</p>
    }

    const { id, title, description, icon } = this.state.recipe

    return (
      <React.Fragment>
        <H2 centered>
          <Link to="/">
            <IconBack src={ArrowIcon} alt="Back" />
          </Link>
          {this.props.title}
        </H2>

        <DetailContainer>
          <Icon src={icon} alt="Recipe Icon"/>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </DetailContainer>

        <ButtonContainer>
          <Link to={`/edit/${id}`}>
            <Button type="button">Edit</Button>
          </Link>      
          <Button type="button" onClick={this.deteleRecipe}>Delete</Button>
        </ButtonContainer>
      </React.Fragment>
    );
  }    
}

RecipeDetail.propTypes = {
  title: PropTypes.string.isRequired
}

export default RecipeDetail;