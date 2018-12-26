import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import getDBInstance from 'helpers/storage';

import Button from 'styledComponents/Button';
import ButtonContainer from 'styledComponents/ButtonContainer';
import Title from 'styledComponents/Title';
import Description from 'styledComponents/Description';
import Icon from 'styledComponents/Icon'
import DetailContainer from 'styledComponents/DetailContainer'

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

export default withRouter(RecipeDetail);